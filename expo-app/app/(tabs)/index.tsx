
import React from 'react';
import App from '../../App';  
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});


const MainScreen = () => {
  return <App />;
};

export default MainScreen;
