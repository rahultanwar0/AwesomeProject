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
} from 'react-native';

export default function App() {
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
  const [myname, setmyname] = useState('tanwar');

  return (
    <View>
      {
        // name ? <Text>{name}</Text> : <Text>no name</Text>
        // name && <Text>{name}</Text>
        // array.map(item=> <Text>{item.name}</Text>)
        // array.map(item=> {
        //   return <Text>{item.name}</Text>
        // })

        myname ? <Text>{myname}</Text> : <Text>No name</Text>
      }
      <ReanderId />
      <Button
        title="Button1"
        color="black"
        onPress={() => {
          setmyname('Button1');
        }}
      />
      <Button
        title="Button2"
        color="black"
        onPress={() => {
          setmyname('Button2');
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log('hello');
        }}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Type here"
        style={{hight:50,borderWidth:2}}
        onChangeText={(text) => {
          console.log(text)
        }}
      />
    </View>
  )
}
