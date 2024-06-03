import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

import {Colors, Typography} from '../styles';

interface IProps extends TextProps {
  /** Default as 'body' */
  type?: 'body' | 'headline' | 'subheadline';
  /** Default as 'contentPrimary' */
  color?: keyof typeof Colors;
}

const Text: React.FC<IProps> = ({
  type = 'body',
  color = 'contentPrimary',
  style,
  ...props
}) => {
  return (
    <RNText style={[styles[type], {color: Colors[color]}, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  body: Typography.body,
  headline: Typography.headline,
  subheadline: Typography.subheadline,
});

export default Text;
