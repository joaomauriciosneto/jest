import { Messages } from './messages';

const createSut = () => {
  return new Messages();
};

describe('Messages', () => {
  // limpar os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // system under test
    const sut = createSut();
    // saveOrder é o nome do método da classe que está sendo testada
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    // system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    // espera o console.log ser chamado apenas uma vez
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    // system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    // espera o console.log ser chamado com a mensagem passada
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
