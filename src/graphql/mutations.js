import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation signIn($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;