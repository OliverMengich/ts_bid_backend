/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  CategoryEnum: "Animals" | "Books" | "Electronics" | "Fashion" | "Groceries" | "Home" | "Other" | "Sports"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Auction: { // root type
    auctionEndTime: string; // String!
    auctionIncrementTime: string; // String!
    auctionStartPrice: string; // String!
    auctionStartTime: string; // String!
    auctionStatus: boolean; // Boolean!
    auctionUpdatedPrice: string; // String!
    auctionWinner: NexusGenRootTypes['User']; // User!
    bids?: NexusGenRootTypes['Bid'][] | null; // [Bid!]
    createdAt: string; // String!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    updatedAt: string; // String!
  }
  Bid: { // root type
    auction: NexusGenRootTypes['Auction']; // Auction!
    bidPrice: number; // Float!
    bidTime: string; // String!
    bidder: string; // ID!
    createdAt: string; // String!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    updatedAt: string; // String!
  }
  Mutation: {};
  Product: { // root type
    category: string; // String!
    id: string; // ID!
    imageUri: Array<string | null>; // [String]!
    owner: string; // ID!
    price: number; // Float!
    title: string; // String!
  }
  Query: {};
  Subscription: {};
  User: { // root type
    createdAt: string; // String!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
    phoneNumber: string; // String!
    updatedAt: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Auction: { // field return type
    auctionEndTime: string; // String!
    auctionIncrementTime: string; // String!
    auctionStartPrice: string; // String!
    auctionStartTime: string; // String!
    auctionStatus: boolean; // Boolean!
    auctionUpdatedPrice: string; // String!
    auctionWinner: NexusGenRootTypes['User']; // User!
    bids: NexusGenRootTypes['Bid'][] | null; // [Bid!]
    createdAt: string; // String!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    updatedAt: string; // String!
  }
  Bid: { // field return type
    auction: NexusGenRootTypes['Auction']; // Auction!
    bidPrice: number; // Float!
    bidTime: string; // String!
    bidder: string; // ID!
    createdAt: string; // String!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    updatedAt: string; // String!
  }
  Mutation: { // field return type
    createAuction: NexusGenRootTypes['Auction']; // Auction!
    createProduct: NexusGenRootTypes['Product']; // Product!
    createUser: NexusGenRootTypes['User']; // User!
    deleteAuction: NexusGenRootTypes['Auction']; // Auction!
    deleteProduct: NexusGenRootTypes['Product'] | null; // Product
    deleteUser: NexusGenRootTypes['User']; // User!
    updateAuction: NexusGenRootTypes['Auction']; // Auction!
    updateProduct: NexusGenRootTypes['Product']; // Product!
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Product: { // field return type
    category: string; // String!
    id: string; // ID!
    imageUri: Array<string | null>; // [String]!
    owner: string; // ID!
    price: number; // Float!
    title: string; // String!
  }
  Query: { // field return type
    auction: NexusGenRootTypes['Auction'] | null; // Auction
    auctions: Array<NexusGenRootTypes['Auction'] | null> | null; // [Auction]
    product: NexusGenRootTypes['Product']; // Product!
    products: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<Array<NexusGenRootTypes['User'] | null> | null> | null; // [[User]]
  }
  Subscription: { // field return type
    createAuction: NexusGenRootTypes['Auction']; // Auction!
    deleteAuction: NexusGenRootTypes['Auction']; // Auction!
    updateAuction: NexusGenRootTypes['Auction']; // Auction!
  }
  User: { // field return type
    createdAt: string; // String!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
    phoneNumber: string; // String!
    updatedAt: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Auction: { // field return type name
    auctionEndTime: 'String'
    auctionIncrementTime: 'String'
    auctionStartPrice: 'String'
    auctionStartTime: 'String'
    auctionStatus: 'Boolean'
    auctionUpdatedPrice: 'String'
    auctionWinner: 'User'
    bids: 'Bid'
    createdAt: 'String'
    id: 'ID'
    product: 'Product'
    updatedAt: 'String'
  }
  Bid: { // field return type name
    auction: 'Auction'
    bidPrice: 'Float'
    bidTime: 'String'
    bidder: 'ID'
    createdAt: 'String'
    id: 'ID'
    product: 'Product'
    updatedAt: 'String'
  }
  Mutation: { // field return type name
    createAuction: 'Auction'
    createProduct: 'Product'
    createUser: 'User'
    deleteAuction: 'Auction'
    deleteProduct: 'Product'
    deleteUser: 'User'
    updateAuction: 'Auction'
    updateProduct: 'Product'
    updateUser: 'User'
  }
  Product: { // field return type name
    category: 'String'
    id: 'ID'
    imageUri: 'String'
    owner: 'ID'
    price: 'Float'
    title: 'String'
  }
  Query: { // field return type name
    auction: 'Auction'
    auctions: 'Auction'
    product: 'Product'
    products: 'Product'
    user: 'User'
    users: 'User'
  }
  Subscription: { // field return type name
    createAuction: 'Auction'
    deleteAuction: 'Auction'
    updateAuction: 'Auction'
  }
  User: { // field return type name
    createdAt: 'String'
    email: 'String'
    id: 'ID'
    name: 'String'
    password: 'String'
    phoneNumber: 'String'
    updatedAt: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAuction: { // args
      auctionEndTime: string; // String!
      auctionIncrementTime: string; // String!
      auctionStartPrice: string; // String!
      auctionStartTime: string; // String!
      auctionStatus: boolean; // Boolean!
      auctionUpdatedPrice: string; // String!
      auctionWinner: string; // ID!
      productId: string; // ID!
    }
    createProduct: { // args
      category?: NexusGenEnums['CategoryEnum'] | null; // CategoryEnum
      imageUri: Array<string | null>; // [String]!
      owner?: string | null; // String
      price: number; // Float!
      title: string; // String!
    }
    createUser: { // args
      email: string; // ID!
      name: string; // ID!
      password: string; // ID!
    }
    deleteAuction: { // args
      auctionId: string; // ID!
    }
    deleteProduct: { // args
      id: string; // ID!
    }
    deleteUser: { // args
      id: string; // ID!
    }
    updateAuction: { // args
      auctionEndTime: string; // String!
      auctionId: string; // ID!
      auctionIncrementTime: string; // String!
      auctionStartPrice: string; // String!
      auctionStartTime: string; // String!
      auctionStatus: boolean; // Boolean!
      auctionUpdatedPrice: string; // String!
      auctionWinner: string; // ID!
      id: string; // String!
    }
    updateProduct: { // args
      category?: NexusGenEnums['CategoryEnum'] | null; // CategoryEnum
      id?: string | null; // ID
      imageUri?: Array<string | null> | null; // [String]
      owner?: string | null; // String
      price?: number | null; // Float
      title?: string | null; // String
    }
    updateUser: { // args
      email: string; // ID!
      id: string; // ID!
      name: string; // ID!
      password: string; // ID!
    }
  }
  Query: {
    auction: { // args
      id: string; // ID!
    }
    product: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}