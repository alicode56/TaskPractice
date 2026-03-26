import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>whats new in javascript</Text>
        </View>
        <Image
          source={require('../Images/node.webp')}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            The Badshahi Mosque is a Mughal-era imperial mosque located in
            Lahore, Punjab, Pakistan. It was constructed between 1671 and 1673
            by the Mughal emperor ...Read more
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.w3schools.com/JS/js_2025.asp')
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/accounts/login/?hl=en')
            }
          >
            <Text style={styles.socialLinks}>follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
    backgroundColor: '#627779',
    elevation: 3, // For Android
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  headerText: {
    fontSize:16,
        fontWeight:'bold',
        color:'#000',
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
  },
  bodyContainer: {
    padding: 8,
    

  },
  footerContainer: {
      justifyContent: 'space-evenly',
    alignItems: 'center', 
    flexDirection:'row',
  },
  socialLinks: {
    fontSize: 14,
    color: '#0e0b0b',      
    paddingHorizontal:20,
    paddingVertical:6,
    backgroundColor:'#fff',
    borderRadius:6,
  },
});
