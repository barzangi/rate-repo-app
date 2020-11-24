import React from 'react';
import * as yup from 'yup';
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 character long')
    .required('Password is required')
});

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    Alert.alert(`Welcome, ${username}. You have successfully signed in.`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;