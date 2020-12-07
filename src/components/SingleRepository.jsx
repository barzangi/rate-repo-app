import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';

import RepositoryItem from './RepositoryItem';

import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.backgroundColors.mainContainer,
    padding: 15
  },
  rating: {
    display: 'flex',
    flex: 0,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingText: {
    color: theme.colors.primary
  },
  details: {
    flexGrow: 1,
    flex: 1,
    marginLeft: 15
  },
  separator: {
    height: 10
  },
  reviewList: {
    marginTop: 10
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text
          style={styles.ratingText}
          fontSize='subheading'
        >
          {review.rating}
        </Text>
      </View>
      <View style={styles.details}>
        <Text
          fontSize='subheading'
          fontWeight='bold'
          color='textPrimary'
        >
          {review.user.username}
        </Text>
        <Text
          color='textSecondary'
        >
          {format(new Date(review.createdAt), 'dd.mm.yyyy')}
        </Text>
        <Text
          color='textPrimary'
        >
          {review.text}
        </Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  let { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <>  
    {!repository 
      ? null 
      : <>
          <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem item={repository} singleRepo='true' />}
            ItemSeparatorComponent={ItemSeparator}
          />
        </>
        
      }
    </>
  );
};

export default SingleRepository;