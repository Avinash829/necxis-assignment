// expo-app/App.tsx
import React, { useEffect } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import '@react-native-firebase/app';
import { WebView } from 'react-native-webview';

const App = () => {
  useEffect(() => {
    // Request permission for notifications
    messaging()
      .requestPermission()
      .then(authStatus => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);

          // Get FCM token
          messaging()
            .getToken()
            .then(token => {
              console.log('FCM Token:', token);
              // TODO: Send token to backend if needed
            });
        }
      });

    // Foreground message handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('New Notification', JSON.stringify(remoteMessage.notification));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://necxis-assignment-eight.vercel.app' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
