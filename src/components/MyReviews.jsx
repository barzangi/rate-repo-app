import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import ReviewItem from './ReviewItem';

import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { authorizedUser } = useAuthorizedUser({ includeReviews: true });
  const history = useHistory();

  const reviews = authorizedUser
    ? authorizedUser.reviews.edges.map(edge => edge.node)
    : [];

  const viewRepository = id => {
    history.push(`/repository/${id}`);
  };

  return (
    <>
    {!authorizedUser
      ? null
      : <>
          <FlatList
            data={reviews}
            renderItem={({ item }) => 
              <ReviewItem
                review={item}
                isUserReview={true}
                viewRepository={viewRepository}
              />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
          />
        </>
    }
    </>
  );
};

export default MyReviews;