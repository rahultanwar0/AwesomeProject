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

export function Touchhablecomponent() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('hello');
        }}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}
