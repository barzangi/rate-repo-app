import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundColors.mainContainer,
    padding: 15
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    flexGrow: 0
  },
  info: {
    flexGrow: 1,
    marginLeft: 15,
    flex: 1
  },
  languageTagContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8
  },
  languageTag: {
    flex: 0,
    padding: 8,
    borderRadius: 5,
    color: '#ffffff',
    backgroundColor: theme.colors.primary,
    flexShrink: 1
  },
  statsElement: {
    display: 'flex',
    flex: 0,
    flexShrink: 1,
    alignItems: 'center'
  },
});

export const formatStatNumber = (statNumber) => {
  return statNumber < 1000 ? statNumber : Number(statNumber/1000).toFixed(1).concat('k');
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={style.container}>
      <View style={style.details}>
        <Image
          style={style.avatar}
          source={{
            uri: item.ownerAvatarUrl
          }}
        />
        <View style={style.info}>
          <Text
            testID='repoFullName'
            fontSize='subheading'
            fontWeight='bold'
            color='textPrimary'
          >
            {item.fullName}
          </Text>
          <Text
            testID='repoDescription'
            color='textSecondary'
          >
            {item.description}
          </Text>
          <View style={style.languageTagContainer}>
            <Text
              testID='repoLanguage'
              style={style.languageTag}
            >
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.stats}>
        <View style={style.statsElement}>
          <Text
            testID='repoStargazersCount'
            fontSize='subheading'
            fontWeight='bold'
            color='textPrimary'
          >
            {formatStatNumber(item.stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={style.statsElement}>
          <Text
            testID='repoForksCount'
            fontSize='subheading'
            fontWeight='bold'
            color='textPrimary'
          >
            {formatStatNumber(item.forksCount)}
          </Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={style.statsElement}>
          <Text
            testID='repoReviewCount'
            fontSize='subheading'
            fontWeight='bold'
            color='textPrimary'
          >
            {formatStatNumber(item.reviewCount)}
          </Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={style.statsElement}>
          <Text
            testID='repoRatingAverage'
            fontSize='subheading'
            fontWeight='bold'
            color='textPrimary'
          >
            {formatStatNumber(item.ratingAverage)}
          </Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;