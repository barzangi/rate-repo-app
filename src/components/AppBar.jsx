import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.backgroundColors.appBar,
    paddingBottom: 10
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tabsContainer}>
        <Link to='/'>
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        <Link to='/sign-in'>
          <AppBarTab>Sign in</AppBarTab>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;