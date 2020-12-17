import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

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
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [sortType, setSortType] = useState(null);
  const { repositories } = useRepositories(orderBy, orderDirection);

  const handleChoice = (itemValue) => {
    setSortType(itemValue);
    if (itemValue === 'latest') {
      setOrderBy('CREATED_AT');
      setOrderDirection('DESC');
    } else if (itemValue === 'highest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('DESC');
    } else if (itemValue === 'lowest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('ASC');
    }
  };

  return (
    <>
      <Picker
        selectedValue={sortType}
        onValueChange={(itemValue) => handleChoice(itemValue)}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated repositories' value='highest' />
        <Picker.Item label='Lowest rated repositories' value='lowest' />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;