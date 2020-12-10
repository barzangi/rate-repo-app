import { StyleSheet } from 'react-native';
import theme from './theme';

export const formStyles = StyleSheet.create({
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
  }
});