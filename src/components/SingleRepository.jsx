import React from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';

import useRepository from '../hooks/useRepository';

const SingleRepository = () => {
  let { id } = useParams();
  const { repository } = useRepository(id);

  return (
    <>
    {!repository ? null : <RepositoryItem item={repository} singleRepo='true' />}
    </>
  );
};

export default SingleRepository;