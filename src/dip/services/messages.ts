import { MessageProtocol } from '../classes/interfaces/message-protocol';

export class Messages implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
