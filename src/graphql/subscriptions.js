/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      user_type
      email
      test
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      user_type
      email
      test
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      user_type
      email
      test
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      phone_number
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      phone_number
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      phone_number
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChef = /* GraphQL */ `
  subscription OnCreateChef {
    onCreateChef {
      id
      name
      lat
      long1
      description
      num_of_ratings
      average_rating
      device_token
      sns_arn
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChef = /* GraphQL */ `
  subscription OnUpdateChef {
    onUpdateChef {
      id
      name
      lat
      long1
      description
      num_of_ratings
      average_rating
      device_token
      sns_arn
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChef = /* GraphQL */ `
  subscription OnDeleteChef {
    onDeleteChef {
      id
      name
      lat
      long1
      description
      num_of_ratings
      average_rating
      device_token
      sns_arn
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
      id
      chef_id
      name
      description
      Price
      initial_quantity
      Avalability
      food_type
      remaining_quantity
      dish_category
      request_quantity
      cuisine_type
      allergy_info
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
      id
      chef_id
      name
      description
      Price
      initial_quantity
      Avalability
      food_type
      remaining_quantity
      dish_category
      request_quantity
      cuisine_type
      allergy_info
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
      id
      chef_id
      name
      description
      Price
      initial_quantity
      Avalability
      food_type
      remaining_quantity
      dish_category
      request_quantity
      cuisine_type
      allergy_info
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      customerId
      chefId
      orderPlacedDate
      deliveryDate
      deliveryTime
      deliveryType
      deliveryNote
      amount
      status
      address
      special_instruction
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      customerId
      chefId
      orderPlacedDate
      deliveryDate
      deliveryTime
      deliveryType
      deliveryNote
      amount
      status
      address
      special_instruction
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      customerId
      chefId
      orderPlacedDate
      deliveryDate
      deliveryTime
      deliveryType
      deliveryNote
      amount
      status
      address
      special_instruction
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderDishes = /* GraphQL */ `
  subscription OnCreateOrderDishes {
    onCreateOrderDishes {
      id
      dishId
      quantity
      orderID
      dish_name
      price
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrderDishes = /* GraphQL */ `
  subscription OnUpdateOrderDishes {
    onUpdateOrderDishes {
      id
      dishId
      quantity
      orderID
      dish_name
      price
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrderDishes = /* GraphQL */ `
  subscription OnDeleteOrderDishes {
    onDeleteOrderDishes {
      id
      dishId
      quantity
      orderID
      dish_name
      price
      email
      cust_email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews {
    onCreateReviews {
      id
      chefId
      custId
      rating
      Comment
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews {
    onUpdateReviews {
      id
      chefId
      custId
      rating
      Comment
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews {
    onDeleteReviews {
      id
      chefId
      custId
      rating
      Comment
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePasscode = /* GraphQL */ `
  subscription OnCreatePasscode {
    onCreatePasscode {
      id
      pass_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePasscode = /* GraphQL */ `
  subscription OnUpdatePasscode {
    onUpdatePasscode {
      id
      pass_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePasscode = /* GraphQL */ `
  subscription OnDeletePasscode {
    onDeletePasscode {
      id
      pass_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      userId
      postcode
      houseNumber
      street
      additional
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      userId
      postcode
      houseNumber
      street
      additional
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      userId
      postcode
      houseNumber
      street
      additional
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
