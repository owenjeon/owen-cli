import {Command, flags} from '@oclif/command'
import {createDecipher} from 'crypto'

export default class Decrypt extends Command {
  static description = '복호화 결과를 리턴'

  static examples = [
    '$ owencli decrypt owen-awesome',
  ]

  static flags = {
    value: flags.string({char: 'v', description: 'name to print'}),
  }

  static args = [{name: 'value'}]

  async run() {
    const {args, flags} = this.parse(Decrypt)
    const value = flags.value || args.value
    const decipher = createDecipher('aes-256-cbc', 'owen-password')
    let result = decipher.update(value, 'base64', 'utf8');
    result += decipher.final('utf8')

    this.log(`Decrypted Result: ${result}`)
  }
}
