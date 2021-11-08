import gql from 'graphql-tag';

export const getCompanys = gql`
  query getNamesCompanys {
    getNamesCompanys {
      statusCode
      message
      error
      response
    }
  }
`;