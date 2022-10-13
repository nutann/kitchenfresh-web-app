import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChefMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderDishesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PasscodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly user_type: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly phone_number: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Chef {
  readonly id: string;
  readonly name: string;
  readonly lat: string;
  readonly long1: string;
  readonly description?: string | null;
  readonly num_of_ratings: number;
  readonly average_rating: number;
  readonly device_token?: string | null;
  readonly sns_arn?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Chef, ChefMetaData>);
  static copyOf(source: Chef, mutator: (draft: MutableModel<Chef, ChefMetaData>) => MutableModel<Chef, ChefMetaData> | void): Chef;
}

export declare class Dish {
  readonly id: string;
  readonly chef_id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly Price: number;
  readonly initial_quantity: number;
  readonly Avalability: string;
  readonly food_type: string;
  readonly remaining_quantity: number;
  readonly dish_category: string;
  readonly request_quantity: number;
  readonly cuisine_type: string;
  readonly allergy_info?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dish, DishMetaData>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

export declare class Order {
  readonly id: string;
  readonly customerId: string;
  readonly chefId: string;
  readonly orderPlacedDate: string;
  readonly deliveryDate: string;
  readonly deliveryTime: string;
  readonly deliveryType: string;
  readonly deliveryNote?: string | null;
  readonly amount: number;
  readonly status: string;
  readonly address: string;
  readonly special_instruction?: string | null;
  readonly email?: string | null;
  readonly cust_email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderDishes {
  readonly id: string;
  readonly dishId: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly dish_name: string;
  readonly price: number;
  readonly email?: string | null;
  readonly cust_email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrderDishes, OrderDishesMetaData>);
  static copyOf(source: OrderDishes, mutator: (draft: MutableModel<OrderDishes, OrderDishesMetaData>) => MutableModel<OrderDishes, OrderDishesMetaData> | void): OrderDishes;
}

export declare class Reviews {
  readonly id: string;
  readonly chefId: string;
  readonly custId: string;
  readonly rating: number;
  readonly Comment?: string | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class Passcode {
  readonly id: string;
  readonly pass_code?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Passcode, PasscodeMetaData>);
  static copyOf(source: Passcode, mutator: (draft: MutableModel<Passcode, PasscodeMetaData>) => MutableModel<Passcode, PasscodeMetaData> | void): Passcode;
}

export declare class Address {
  readonly id: string;
  readonly userId: string;
  readonly postcode: string;
  readonly houseNumber?: string | null;
  readonly street?: string | null;
  readonly additional?: string | null;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}