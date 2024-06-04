// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

function use(vt: vscode.Terminal) {
  // console.log(vt.name);
  // console.log((vt.creationOptions as any).shellPath);
  const isWin = process.platform === "win32";
  if (isWin) {
    // vt.sendText("nvm use $(cat .nvmrc).replace('v', '')");
    vt.sendText("nvm use $(cat .nvmrc)");
  } else {
    vt.sendText("nvm use");
  }
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-nvm-switcher" is now active!'
  );

  const terminals = vscode.window.terminals;
  if (terminals.length) {
    terminals.forEach((vt: vscode.Terminal) => use(vt));
  }
  vscode.window.onDidOpenTerminal((vt: vscode.Terminal) => use(vt));
}

// This method is called when your extension is deactivated
export function deactivate() {}
