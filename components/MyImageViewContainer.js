import React, {Profiler, useState} from 'react';
import {
  ToastAndroid,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  ScrollViewComponent,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native';

export function MyPdfImage() {
  return (
    <View>
      <Image
        source={require('./assets/plash.png')}
        style={{hight: 200, width: 300}}
      /> </View>
  );
}
