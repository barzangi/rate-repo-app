import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = id => {
  const [repository, setRepository] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
    onError: () => console.log(error)
  });

  const fetchRepository = () => {
    setRepository(loading ? null : data.repository);
  };

  useEffect(() => {
    fetchRepository();
  }, [fetchRepository]);

  return { repository, loading, refetch: fetchRepository};
};

export default useRepository;