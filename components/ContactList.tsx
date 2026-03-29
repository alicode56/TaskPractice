import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'app developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
      phone: '123-456-7890',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'web developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
      phone: '987-654-3210',
    },
    {
      uid: 3,
      name: 'Alice Johnson',
      status: 'QA Engineer',
      imageUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
      phone: '555-555-5555',
    },
    {
      uid: 4,
      name: 'Jane Smith',
      status: 'web developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
      phone: '987-654-3210',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status: phone, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userPhone}>{phone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    padding: 12,
    backgroundColor: '#961e1e',
    borderRadius: 12,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
  },
  userPhone: {
    fontSize: 14,
  },
});
