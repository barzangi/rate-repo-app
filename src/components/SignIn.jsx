import React from 'react';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';

import theme from '../theme';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import useSignIn from '../hooks/useSignIn';

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
        testID='usernameField'
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        style={styles.textInput}
        testID='passwordField'
      />
      <TouchableWithoutFeedback onPress={onSubmit} testID='submitButton'>
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

export const SignInContainer = ({ onSubmit }) => {
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data  = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;