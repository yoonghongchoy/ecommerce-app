import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {Colors, Spacing, Typography} from '../styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  style,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    padding: Spacing.S_2,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    ...Typography.body,
    color: Colors.backgroundPrimary,
  },
});

export default Button;
