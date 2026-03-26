import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../Images/Badshahi masque.jpg')} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Badshahi Masjid</Text>
          <Text style={styles.cardLabel}>city lhr pakistan</Text>
          <Text style={styles.cardDescription}>
           The Badshahi Mosque in Lahore, Pakistan, is a 17th-century
            Mughal-era masterpiece constructed under Emperor Aurangzeb,
             completed in 1673. As one of the world's largest mosques, 
             it is renowned for its red sandstone exterior, marble domes,
              and vast courtyard,
          </Text>
          <Text style={styles.cardFooter}>12 mins from away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    alignSelf: 'center',
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3, // For Android
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#373d40',
    fontSize: 12,
    marginBottom: 6,
    marginTop:6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#0e0b0b',
  },
});
