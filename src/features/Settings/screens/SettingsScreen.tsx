import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Colors, Spacing} from '../../../shared/styles';
import {Button, Input, Text} from '../../../shared/components';
import {useCurrentUser} from '../../../context/userContext';
import {PreferenceSwitchItem} from '../components';
import {UserActions} from '../../UserProfile';

const SettingsScreen: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const {user} = useCurrentUser();

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] =
    React.useState(true);
  const [email, setEmail] = React.useState(user?.email || '');

  const handleSaveProfile = () => {
    dispatch(UserActions.updateEmail(email));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text type="headline" style={styles.sectionTitle}>
          Profile Management
        </Text>
        <Input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Save Profile" onPress={handleSaveProfile} />
      </View>

      <View style={styles.section}>
        <Text type="headline" style={styles.sectionTitle}>
          Preferences
        </Text>
        <PreferenceSwitchItem
          title="Dark Mode"
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
        <PreferenceSwitchItem
          title="Notifications"
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Spacing.S_2,
    backgroundColor: Colors.backgroundPrimary,
  },
  section: {
    marginBottom: Spacing.S_4,
  },
  sectionTitle: {
    marginBottom: Spacing.S_2,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: Spacing.S_2,
    marginBottom: Spacing.S_2,
    backgroundColor: Colors.backgroundSecondary,
  },
  preferrenceContainer: {
    borderRadius: 8,
  },
});

export default SettingsScreen;
