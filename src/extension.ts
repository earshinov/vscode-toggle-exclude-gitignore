import vscode from 'vscode';

import { COMMAND, SETTING } from './const';
import { catchErrors } from './utils';

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    COMMAND,
    catchErrors(async () => {
      const config = vscode.workspace.getConfiguration();

      const value = !config.get(SETTING, false);

      // When a workspace is opened, remove setting from workspace configuration, if it is present there
      if (vscode.workspace.name != null) {
        if (config.inspect(SETTING)?.workspaceValue !== undefined)
          await config.update(SETTING, undefined, vscode.ConfigurationTarget.Workspace);
      }

      await config.update(SETTING, value, vscode.ConfigurationTarget.Global);
    })
  );

  context.subscriptions.push(disposable);
}

/* istanbul ignore next */
export function deactivate(): void {}
