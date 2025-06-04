import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://example.com' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="#6200ee"
            size="large"
            style={styles.loadingIndicator}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
