owencli
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/owencli.svg)](https://npmjs.org/package/owencli)
[![Downloads/week](https://img.shields.io/npm/dw/owencli.svg)](https://npmjs.org/package/owencli)
[![License](https://img.shields.io/npm/l/owencli.svg)](https://github.com/owenjeon/owen-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g owencli
$ owencli COMMAND
running command...
$ owencli (-v|--version|version)
owencli/0.0.0 darwin-x64 node-v10.15.1
$ owencli --help [COMMAND]
USAGE
  $ owencli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`owencli hello [FILE]`](#owencli-hello-file)
* [`owencli help [COMMAND]`](#owencli-help-command)

## `owencli hello [FILE]`

describe the command here

```
USAGE
  $ owencli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ owencli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/owenjeon/owen-cli/blob/v0.0.0/src/commands/hello.ts)_

## `owencli help [COMMAND]`

display help for owencli

```
USAGE
  $ owencli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
