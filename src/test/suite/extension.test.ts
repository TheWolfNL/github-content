import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as extension from '../../extension';

const decrypted: string = `yaml:
    directories:
      - some/random/and/slightly/longer/than/usual/path/since/it's/deep/in/the/abyss
      - closer/to/root
      - ./
    special-characters:
      - $%&(){}[]\n
      - with comment 
      #%@$%&(){}[]\\n
      - .tra    <- see that tab
      - or\t<- that one

^ that newline
important stuffs
`;

const encrypted: string = `eWFtbDoKICAgIGRpcmVjdG9yaWVzOgogICAgICAtIHNvbWUvcmFuZG9tL2Fu\\nZC9zbGlnaHRseS9sb25nZXIvdGhhbi91c3VhbC9wYXRoL3NpbmNlL2l0J3Mv\\nZGVlcC9pbi90aGUvYWJ5c3MKICAgICAgLSBjbG9zZXIvdG8vcm9vdAogICAg\\nICAtIC4vCiAgICBzcGVjaWFsLWNoYXJhY3RlcnM6CiAgICAgIC0gJCUmKCl7\\nfVtdCgogICAgICAtIHdpdGggY29tbWVudCAKICAgICAgIyVAJCUmKCl7fVtd\\nXG4KICAgICAgLSAudHJhICAgIDwtIHNlZSB0aGF0IHRhYgogICAgICAtIG9y\\nCTwtIHRoYXQgb25lCgpeIHRoYXQgbmV3bGluZQppbXBvcnRhbnQgc3R1ZmZz\\nCg==\\n`;


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Encryption', () => {
		let actual = extension.GithubContentEncode(decrypted);
		assert.equal(actual, encrypted);
	});
	test('Decryption', () => {
		let actual = extension.GithubContentDecode(encrypted);
		assert.equal(actual, decrypted);
	});
});
