import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  // limpar os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // system under test
    const sut = createSut('Camisa', 59.75);
    expect(sut).toHaveProperty('name', 'Camisa');
    expect(sut).toHaveProperty('price', 59.75);
  });
});
