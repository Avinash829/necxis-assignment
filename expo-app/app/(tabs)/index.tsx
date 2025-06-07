// expo-app/app/(tabs)/index.tsx
import React from 'react';
import App from '../../App';  // Import App component relative to this file
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});


const MainScreen = () => {
  return <App />;
};

export default MainScreen;
