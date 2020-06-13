# Github Content Encoder/Decoder README

This VSCode extension, "github-content", allows for easy encoding/decoding Github's Content format.

![Usage Preview](https://github.com/TheWolfNL/github-content/raw/master/previews/usage.gif)

## Commands:

* **Github Content Encode** 
* **Github Content Decode**

## Keybindings:

* Mac
    * **cmd+g cmd+e** Encode
    * **cmd+g cmd+d** Decode
* Win/Linux
    * **ctrl+g ctrl+e** Encode
    * **ctrl+g ctrl+d** Decode

### Example
Encrypted
```
eWFtbDoKICAgIGRpcmVjdG9yaWVzOgogICAgICAtIHNvbWUvcmFuZG9tL2Fu\nZC9zbGlnaHRseS9sb25nZXIvdGhhbi91c3VhbC9wYXRoL3NpbmNlL2l0J3Mv\nZGVlcC9pbi90aGUvYWJ5c3MKICAgICAgLSBjbG9zZXIvdG8vcm9vdAogICAg\nICAtIC4vCiAgICBzcGVjaWFsLWNoYXJhY3RlcnM6CiAgICAgIC0gJCUmKCl7\nfVtdCgogICAgICAtIHdpdGggY29tbWVudCAKICAgICAgIyVAJCUmKCl7fVtd\nXG4KICAgICAgLSAudHJhICAgIDwtIHNlZSB0aGF0IHRhYgogICAgICAtIG9y\nCTwtIHRoYXQgb25lCgpeIHRoYXQgbmV3bGluZQppbXBvcnRhbnQgc3R1ZmZz\nCg==\n
```
Decrypted
```
yaml:
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

```

## Release Notes

### 1.0.0

Initial release of the github-content VSCode extension
