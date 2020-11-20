import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  appBarTab: {
    margin: 10,
    color: 'white'
  }
});

const AppBarTab = props => {
  return (
    <TouchableWithoutFeedback>
      <Text
        style={styles.appBarTab}
        fontWeight='bold'
        fontSize='subheading'
      >
        {props.children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;