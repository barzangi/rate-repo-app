import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = variables => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
    onError: () => console.log(error)
  });

  const fetchRepositories = () => {
    setRepositories(loading ? null : data.repositories);
  };

  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;