import { gql } from '@apollo/client';

export const login = gql`
mutation login($input: loginInput) {
    login(input: $input) {
    statusCode
    message
    response
    error
  }
}
`;

export const register = gql`
mutation register($input: registerInput) {
    register(input: $input) {
    statusCode
    message
    response
    error
  }
}
`;

export const create_product = gql`
mutation createProduct($input: productInput) {
  createProduct(input: $input) {
    statusCode
    message
    response
    error
  }
}
`;