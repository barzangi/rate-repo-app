import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.backgroundColors.appBar,
    paddingBottom: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <AppBarTab>Repositories</AppBarTab>
      </Link>
      <Link to='/sign-in'>
        <AppBarTab>Sign in</AppBarTab>
      </Link>
    </View>
  );
};

export default AppBar;