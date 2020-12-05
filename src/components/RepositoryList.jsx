import React from 'react';
import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  const viewSingleRepo = id => {
    history.push(`/repository/${id}`);
  };

  // get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => viewSingleRepo(item.id)}>
          <RepositoryItem
            key={item.id}
            item={item}
            singleRepo={false}
          />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;