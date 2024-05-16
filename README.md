# vscode-toggle-exclude-gitignore

[![Build Status](https://github.com/earshinov/vscode-toggle-exclude-gitignore/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/earshinov/vscode-toggle-exclude-gitignore)
[![Coverage Status](https://coveralls.io/repos/github/earshinov/vscode-toggle-exclude-gitignore/badge.svg?branch=master)](https://coveralls.io/github/earshinov/vscode-toggle-exclude-gitignore?branch=master)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/earshinov.vscode-toggle-exclude-gitignore)](https://marketplace.visualstudio.com/items?itemName=earshinov.vscode-toggle-exclude-gitignore)

Toggle "Explorer: Exclude Git Ignore" (`explorer.excludeGitIgnore`) setting globally in user settings.

When `explorer.excludeGitIgnore` is also defined in workspace settings, it is removed from there for two reasons:

- this way the workspace setting does not override the global setting set by the extension;
- user interface settings like this one should better be kept in user settings, not workspace settings, which are often pushed to a source code repository.

## Usage

**Option 1**: Command Palette > Explorer: Toggle Git Ignore

**Option 2**: Default keyboard shortcut: <kbd>Ctrl</kbd>-<kbd>Alt</kbd>-<kbd>E</kbd> (Windows) / <kbd>Cmd</kbd>-<kbd>Option</kbd>-<kbd>E</kbd> (Mac)

To memorize the shortcut, think of the default shortcut for focusing the Explorer panel: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd> / <kbd>Shift</kbd>-<kbd>Cmd</kbd>-<kbd>E</kbd>.

To reassign the shortcut, open keyboard shortcuts and look for "Explorer: Toggle Git Ignore" or `earshinov.toggleExcludeGitIgnore`.

## Comparison to similar extensions

| Extension                                                                                                          | Comment                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [chrisbibby.hide-git-ignored](https://marketplace.visualstudio.com/items?itemName=chrisbibby.hide-git-ignored)     | Toggles `explorer.excludeGitIgnore` in workspace settings rather than globally.<br><br>There is a reported issue filed in November 2023: [Make settings applied globaly · Issue #2 · ChrisBibby/vscode_hide-git-ignored](https://github.com/ChrisBibby/vscode_hide-git-ignored/issues/2) |
| [timgthomas.explorer-gitignore](https://marketplace.visualstudio.com/items?itemName=timgthomas.explorer-gitignore) | Toggles `explorer.excludeGitIgnore` in workspace settings rather than globally                                                                                                                                                                                                           |
| [balan-jayavictor.GitIgnored](https://marketplace.visualstudio.com/items?itemName=balan-jayavictor.GitIgnored)     | No source code available                                                                                                                                                                                                                                                                 |

## References

- [Add a command to hide/show file explorer using gitignore · Issue #152696 · microsoft/vscode](https://github.com/microsoft/vscode/issues/152696)
