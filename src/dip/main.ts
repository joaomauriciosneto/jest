/**
 * DIP (Dependency Inversion Principle) - Princípio da Inversão de Dependência:
 * Dependa de abstrações e não de implementações.
 */

import { Messages } from './services/messages';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import {
  EnterpriseCustomer,
  IndividualCustomer,
} from './classes/interfaces/customer';

// criando os itens no carrinho!!!!!
const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
// injetando a dependência no ShoppingCart
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messages = new Messages();
const persistency = new Persistency();
//const individualCustomer = new IndividualCustomer('Sivuca', 'Silva', '111');
const enterpiseCustomer = new EnterpriseCustomer('Suvaquinho S.A.', '5555');

// passando as dependências
const order = new Order(shoppingCart, messages, persistency, enterpiseCustomer);
shoppingCart.addItem(new Product('camisa', 10.58));
shoppingCart.addItem(new Product('cueca', 15.75));
shoppingCart.addItem(new Product('meia', 6.99));
shoppingCart.addItem(new Product('calça', 79.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWidthDiscount());
order.checkout();
console.log(order.orderStatus);
