import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import {Colors, Spacing} from '../styles';

const Input: React.FC<TextInputProps> = props => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.contentSecondary,
    borderRadius: 8,
    padding: Spacing.S_1,
    marginBottom: Spacing.S_2,
  },
});

export default Input;
