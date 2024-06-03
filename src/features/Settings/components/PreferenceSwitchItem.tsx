import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {Text} from '../../../shared/components';
import {Spacing} from '../../../shared/styles';

interface IProps {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const PreferenceSwitchItem: React.FC<IProps> = ({
  title,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.preferenceItem}>
      <Text>{title}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.S_2,
  },
});

export default PreferenceSwitchItem;
