import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {Colors, Spacing} from '../../../shared/styles';
import {Text} from '../../../shared/components';
import {useCurrentUser} from '../../../context/userContext';

const UserProfileScreen: React.FC<{}> = () => {
  const {user, loading, error} = useCurrentUser();

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.accent} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user && (
        <>
          <View style={styles.profileHeader}>
            <Image
              source={{uri: 'https://source.unsplash.com/100x100/?face'}}
              style={styles.profileImage}
            />
            <Text type="headline" style={styles.name}>
              {`${user.name.firstname} ${user.name.lastname}`}
            </Text>
          </View>

          <View style={styles.section}>
            <Text type="subheadline" style={styles.sectionTitle}>
              Personal Information
            </Text>
            <Text style={styles.infoText}>{`Email: ${user.email}`}</Text>
            <Text style={styles.infoText}>{`Username: ${user.username}`}</Text>
            <Text style={styles.infoText}>{`Phone: ${user.phone}`}</Text>
          </View>

          <View style={styles.section}>
            <Text type="subheadline" style={styles.sectionTitle}>
              Address
            </Text>
            <Text
              style={styles.infoText}>{`Street: ${user.address.street}`}</Text>
            <Text style={styles.infoText}>{`City: ${user.address.city}`}</Text>
            <Text
              style={
                styles.infoText
              }>{`Zip Code: ${user.address.zipcode}`}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Spacing.S_2,
    backgroundColor: Colors.backgroundPrimary,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: Spacing.S_4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: Spacing.S_2,
  },
  name: {
    marginBottom: Spacing.S_2,
  },
  section: {
    marginBottom: Spacing.S_4,
  },
  sectionTitle: {
    marginBottom: Spacing.S_2,
  },
  infoText: {
    marginBottom: Spacing.S_1,
  },
  error: {
    color: Colors.error,
    textAlign: 'center',
    marginTop: Spacing.S_2,
  },
});

export default UserProfileScreen;
