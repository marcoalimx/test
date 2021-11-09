import { gql } from '@apollo/client';

export const getProducts = gql`
  query getProducts {
    getProducts {
      statusCode
      message
      error
      response
    }
  }
`;