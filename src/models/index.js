// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Customer, Chef, Dish, Order, OrderDishes, Reviews, Passcode, Address } = initSchema(schema);

export {
  User,
  Customer,
  Chef,
  Dish,
  Order,
  OrderDishes,
  Reviews,
  Passcode,
  Address
};