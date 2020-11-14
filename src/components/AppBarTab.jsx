import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  appBarTab: {
    margin: 10
  }
});

const AppBarTab = props => {
  return (
    <TouchableWithoutFeedback>
      <Text
        style={styles.appBarTab}
        fontWeight='bold'
        fontSize='subheading'
        color='appBarTab'
      >
        {props.children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;