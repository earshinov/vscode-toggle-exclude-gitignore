import assert from 'assert';
import fs from 'fs';
import path from 'path';

import vscode from 'vscode';

import { COMMAND, EXTENSION, SETTING } from '../../const';
import { configGet, updateConfig } from '../../vscode-api';

async function withGlobalSetup<T>(f: () => Thenable<T>): Promise<T> {
  /** Ensures a consistent global configuration, calls `f`, then restores the original global configuration */
  const oldGlobalValue = configGet(SETTING);
  await updateConfig(SETTING, undefined, vscode.ConfigurationTarget.Global);
  try {
    return await f();
  } finally {
    await updateConfig(SETTING, oldGlobalValue, vscode.ConfigurationTarget.Global);
  }
}

function run() {
  /** Run the extension command */
  return vscode.commands.executeCommand(COMMAND);
}

suite(EXTENSION, () => {
  test('basic', async () =>
    withGlobalSetup(async () => {
      let value = configGet(SETTING) ?? false;

      await run();
      value = !value;

      // Check value change
      assert.strictEqual(configGet(SETTING), value);

      if (vscode.workspace.name != null) {
        // Check that running the extension does not create workspace settings file
        const workspacePath = vscode.workspace.workspaceFolders![0].uri.fsPath;
        const workspaceSettingsFilename = path.join(workspacePath, '.vscode', 'settings.json');
        assert.ok(!fs.existsSync(workspaceSettingsFilename));

        // Set workspace value
        await updateConfig(SETTING, value, vscode.ConfigurationTarget.Workspace);
        assert.ok(fs.existsSync(workspaceSettingsFilename));
      }

      await run();
      value = !value;

      if (vscode.workspace.name != null) {
        // Check that workspace value is cleared
        const inspect = vscode.workspace.getConfiguration().inspect(SETTING);
        assert.notStrictEqual(inspect, undefined);
        if (inspect) assert.strictEqual(inspect.workspaceValue, undefined);
      }

      // Check value change
      assert.strictEqual(configGet(SETTING), value);
    }));
});
