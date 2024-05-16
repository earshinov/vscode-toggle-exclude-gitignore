import vscode from 'vscode';

export function configGet(section: string): unknown {
  /**
   * Replacement for `vscode.workspace.getConfiguration().get(...)`
   *
   * CAVEAT: `config.get(..., defaultValue)`, contrary it its documentation, does NOT return `defaultValue` when
   * the setting is not defined, in case there is an implicit default, such as `false` for boolean settings like
   * `explorer.excludeGitIgnore`
   */
  return vscode.workspace.getConfiguration().get(section);
}

export function updateConfig(section: string, value: unknown, target: vscode.ConfigurationTarget): Thenable<void> {
  /**
   * Replacement for `vscode.workspace.getConfiguration().update(...)`
   *
   * CAVEAT: `config.update(...) writes value to persistent storage, but doesn't update `config`
   */
  return vscode.workspace.getConfiguration().update(section, value, target);
}
