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

export function ShowListInTextView() {
    let name = 'hello world';
    let array = [
      {id: '1', name: 'rahul'},
      {id: '2', name: 'deepak'},
      {id: '3', name: 'sachin'},
    ];
    const ReanderId = () => {
      return array.map(item => {
        return <Text>{item.id}</Text>;
      });
    };
  return (

    <View>
        <ReanderId />
    </View>
     );
}
