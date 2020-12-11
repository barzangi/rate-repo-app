import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation signIn($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createNewReview($reviewInput: CreateReviewInput!) {
    createReview(review: $reviewInput) {
      repositoryId
    }
  }
`;