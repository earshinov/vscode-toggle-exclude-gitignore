import fs from 'fs';
import os from 'os';
import path from 'path';

import { runTests } from '@vscode/test-electron';

import { EXTENSION } from '../const';

async function main(): Promise<void> {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // Temporary workspace folder
    const workspaceFolder = fs.mkdtempSync(path.join(os.tmpdir(), EXTENSION));

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [workspaceFolder, '--disable-extensions']
    });

    // Run without opening a workspace
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions']
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
