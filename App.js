import React, {Profiler} from 'react';
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
} from 'react-native';

 
export default function App() {
  let name = "hello world"
  return (
    <View>
      {
        // name ? <Text>{name}</Text> : <Text>no name</Text>
        name && <Text>{name}</Text>

      }
     </View>
  );
}
