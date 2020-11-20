import React from 'react';
import { View, TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import theme from '../theme';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundColors.mainContainer,
    padding: 15
  },
  textInput: {
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading
  },
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    padding: 14,
    textAlign: 'center'
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='Username'
        style={styles.textInput}
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          fontSize='subHeading'
          fontWeight='bold'
          style={styles.button}
        >
          Sign in
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    if (username === '' && password === '') {
      Alert.alert('Please enter username and password.');
    } else {
      Alert.alert(`Welcome, ${username}. You have successfully signed in.`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;