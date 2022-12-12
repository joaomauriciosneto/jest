import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  listAll(): void {
    console.log('Listando todos os itens...');
    console.table(this._items.map((items) => items));
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    // esse "+", foi por conta do método "toFixed", transformando par number... pq toFixed retorna uma string
    return +this._items.reduce((ac, value) => ac + value.price, 0).toFixed(2);
  }

  totalWidthDiscount(): number {
    const result = this.discount.calculate(this.total());
    return +result.toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}
