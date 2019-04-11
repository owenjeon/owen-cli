import {Command, flags} from '@oclif/command'
import {createCipher} from 'crypto'

export default class Encrypt extends Command {
  static description = '암호화 결과를 리턴'

  static examples = [
    '$ owencli encrypt owen-awesome',
  ]

  static flags = {
    value: flags.string({char: 'v', description: 'name to print'}),
  }

  static args = [{name: 'value'}]

  async run() {
    const {args, flags} = this.parse(Encrypt)
    const value = flags.value || args.value
    const cipher = createCipher('aes-256-cbc', 'owen-password')
    let result = cipher.update(value, 'utf8', 'base64')
    result += cipher.final('base64')

    this.log(`Encrypted Result: ${result}`)
  }
}
