import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/message-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

// alto nível
export class Order {
  private _orderStatus: OrderStatus = 'open';

  // não existe mais injeção de dependência de classes
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messages: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.messages.sendMessage(
      `Seu pedido com total de ${this.cart.totalWidthDiscount()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`,
    );
  }
}
