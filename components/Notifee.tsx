import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import notifee, { AndroidStyle } from '@notifee/react-native';

const Notifee = () => {
  const displayNotification = async () => {
    try {
      // Request permissions (required for iOS)
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      // Display a notification
      await notifee.displayNotification({
        title: '🌸 Beautiful Flower Notification',
        body: 'Check out this amazing flower picture!',
        android: {
          channelId,
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
          // Big picture style for showing image
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
          },
        },
      });
    } catch (error) {
      console.log('Notification error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={displayNotification}>
        <Text style={styles.buttonText}>Press me for Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
