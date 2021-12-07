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

const Data = [
  
  {id: 'aId', name: 'bName'},
  {id: 'aId', name: 'bName'},
   {id: 'aId', name: 'bName'}
  
];

export default function App() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Data.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </ScrollView>

      <ScrollView>
        {Data.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
