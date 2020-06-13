// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('"github-content" is now active!');

	let encode = vscode.commands.registerCommand('github-content.GithubContentEncode', () => {
		let e = vscode.window.activeTextEditor;
		if (e != undefined) {
			let d = e.document;
			let sel = e.selections;
			e.edit(function (edit) {
				sel.forEach(function (s) {
					let output = GithubContentEncode(d.getText(new vscode.Range(s.start, s.end)));
					vscode.window.showInformationMessage('Github Content Encode');
					edit.replace(s, output);
				});
			});
		}
	});
	let decode = vscode.commands.registerCommand('github-content.GithubContentDecode', () => {
		let e = vscode.window.activeTextEditor;
		if (e != undefined) {
			let d = e.document;
			let sel = e.selections;
			e.edit(function (edit) {
				sel.forEach(function (s) {
					let output = GithubContentDecode(d.getText(new vscode.Range(s.start, s.end)));
					vscode.window.showInformationMessage('Github Content Decode');
					edit.replace(s, output);
				});
			});
		}
	});

	context.subscriptions.push(encode, decode);
}

export function GithubContentEncode(content: string): string {
	let chunks = content.match(/(.|[\r\n]){1,45}/g)
	if (chunks != null) {
		let output: string = "";
		chunks.forEach(line => {
			output += Buffer.from(line).toString('base64') + "\\n";
		});
		return output
	}
	return content
}

export function GithubContentDecode(content: string): string {
	let output: string = "";
	content.split("\\n").forEach(line => {
		output += Buffer.from(line, 'base64').toString()
	});
	return output
}

// this method is called when your extension is deactivated
export function deactivate() { }
