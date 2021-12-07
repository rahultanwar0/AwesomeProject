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
  let array = [{id:"1",name:"rahul"},{id:"2",name:"deepak"},{id:"3",name:"sachin"}]
  return (
    <View>
      {
        // name ? <Text>{name}</Text> : <Text>no name</Text>
        // name && <Text>{name}</Text>
        // array.map(item=> <Text>{item.name}</Text>)
        array.map(item=> {
          return <Text>{item.name}</Text>
        })

      }
     </View>
  );
}
