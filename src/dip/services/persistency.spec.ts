import { Persistency } from './persistency';

describe('Persistency', () => {
  // limpar os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // system under test
    const sut = new Persistency();
    // saveOrder é o nome do método da classe que está sendo testada
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    // system under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    // espera o console.log ser chamado apenas uma vez
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso!"', () => {
    // system under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    // espera o console.log ser chamado com a mensagem passada
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
