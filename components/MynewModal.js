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
      <Modal
        visible={modalw}
        onRequestClose={() => {
          setModal(false);
        }}
        animationType="slide">
        <Text>hello sir</Text>
        <Button
          title="Back To Main Modal"
          onPress={() => {
            setModal(false);
          }}
        />
      </Modal>
    </View>
  );
}
