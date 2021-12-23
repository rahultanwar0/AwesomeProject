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

export function MyBox() {
    return (

        <View>
             <View style={style.myBox} />
        </View>



    );

}


const style = StyleSheet.create({
    myBox: {
      backgroundColor: 'red',
      width: 100,
      height: 80,
      borderWidth: 1,
    },
    container: {
      flex: 1,
      backgroundColor: 'pink',
      //  flexDirection:"row"
      // justifyContent:"space-between",
      // justifyContent:"space-evenly"
      justifyContent: 'space-around',
    },
  });
