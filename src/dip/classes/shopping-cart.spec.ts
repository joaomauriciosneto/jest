import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createItemCart = (name: string, price: number) => {
  class ClassItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new ClassItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createItemCart('camiseta', 40);
  const cartItem2 = createItemCart('calça', 400);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

/**
 * mock são objetos que simulam o comportamento de objetos reais de forma controlada. Esse mock foi criado apenas para simular a classe Discount que o ShoppingCart precisa receber
 */

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should be have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWidthDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(440);
    expect(sut.totalWidthDiscount()).toBe(440);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  /**
   * Teste unitário do carrinho de compras com Jest.
   * Nesse momento, o carrinho tem dois itens. Estou testando quando os dois itens são excluídos.
   */

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    // remove o item no índice "1"
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    // remove o item no índice "0". como o carrinho tem apenas dois itens, se for removido o segundo item, deve ficar vazio "empty"
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate once when totalWidthDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWidthDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWidthDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWidthDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
