import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.backgroundColors.appBar,
    paddingBottom: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;