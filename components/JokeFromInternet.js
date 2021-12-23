import React, {Profiler, useState,useEffect} from 'react';
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

export function MyJokes() {
  const [jokes, setjoke] = useState('');
  const getJoke = async () => {
    const res = await fetch(
      'http://api.icndb.com/jokes/random?firstName=John&lastName=Doe',
    );
    const result = await res.json();
    setjoke(result.value.joke);
  };

  useEffect(() => {
      getJoke(),[]
  })
  return (
    <View>
      <Button
        title="Get Jokes"
        onPress={() => {
          getJoke();
        }}
      />

      {jokes ? <Text style={{
          fontSize:20,
          fontcolor:'red',
          backgroundColor:'#fff',


      }}>{jokes}</Text> : null}
    </View>
  );
}
