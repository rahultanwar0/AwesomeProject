import React, {Profiler, useState} from 'react';
import { ToastAndroid,
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
    Modal,} from 'react-native';

function lert() {
  alert('Message');
}

export function MyAlertBox() {
  return (
    <View>
      <Button title="showAlertDialogBox" color="red" onPress={lert} />
    </View>
  );
}
