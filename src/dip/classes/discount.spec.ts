import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

// construtor que não recebe "nada"
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  // limpar os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBe(50);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBe(90);
  });
});
