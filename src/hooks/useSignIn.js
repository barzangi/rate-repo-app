import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [ mutate, result ] = useMutation(AUTHORIZE, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });

  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { credentials: { username, password } } });
    return response;
  };

  return [signIn, result];
};

export default useSignIn;