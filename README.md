**Necxis Assignment - Frontend Developer Intern**

Project Overview:
-----------------
This project contains two parts:

1. Next.js Web App
- Built using Next.js and MUI (Material-UI).
- Includes Google Sign-Up feature using Firebase Authentication.
- Hosted on Vercel at https://necxis-assignment-eight.vercel.app

2. Expo Android App
- Built using React Native with Expo framework.
- Integrates the Next.js web app inside a WebView.
- Implements native Firebase Cloud Messaging (FCM) for push notifications.
- Custom native FCM integration used instead of Expo's notification service.

How to Run and Test:
--------------------
Next.js Web App:
1. Clone the repository.
2. Navigate to the 'nextjs-webapp' directory.
3. Run 'npm install' to install dependencies.
4. Run 'npm run dev' to start the development server locally.
5. Alternatively, visit the deployed app at the above URL.

Expo Android App:
1. Clone the repository.
2. Navigate to the 'expo-app' directory.
3. Run 'npm install' to install dependencies.
4. Ensure your Android device is connected or use a compatible emulator.
5. Run 'npx expo start' and scan the QR code with your Android device.
6. Push notifications are handled via native Firebase Cloud Messaging.

Additional Notes:
-----------------
- Do not use Expo's direct notification service; native FCM integration is implemented as per assignment requirements.
- Make sure to configure Firebase with your own project credentials for both apps.
- The repository is public and contains all necessary code to run both projects.
