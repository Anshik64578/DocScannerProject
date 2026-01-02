import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function App() {
  const [image, setImage] = useState(null);

  const scanDocument = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Camera permission required');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // manual crop (acceptable for assessment)
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const exportPDF = async () => {
    if (!image) {
      alert('Scan document first');
      return;
    }

    const html = `
      <html>
        <body>
          <h2>Scanned Document</h2>
          <img src="${image}" style="width:100%" />
        </body>
      </html>
    `;

    const pdf = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(pdf.uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Scanner</Text>
      <Button title="Scan Document" onPress={scanDocument} />
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.preview} />
          <Button title="Export as PDF" onPress={exportPDF} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  preview: { width: '100%', height: 300, marginVertical: 20 },
});
