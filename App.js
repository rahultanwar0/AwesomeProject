import React, {Profiler, useState, useEffect} from 'react';
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
import {Mybutton} from './components/Mybutton';
import {MyAlertBox} from './components/AlertDialog';
import {ShowListInTextView} from './components/ShowListInTextView';
import {Touchhablecomponent} from './components/TouchAbleComp';
import {MyPdfImage} from './components/MyImageViewContainer';
import {MyJokes} from './components/JokeFromInternet';
import {MyBox} from './components/Mybox';
import {Progresss} from './components/Progressj';
import Login from './components/Login';
 
export default function App() {
  const [myname, setmyname] = useState('tanwar');
  const [loading, setloading] = useState(false);
  const [modalw, setModal] = useState(false);

  return (
    <View style={style.container}>
      <ScrollView>
        <MyJokes />

        <Progresss />
        <ShowListInTextView />
        <Login />
        <MyAlertBox />
        <Touchhablecomponent />
        <MyBox />

        {/* <render /> */}

        <Image
          source={require('./assets/plash.png')}
          style={{hight: 200, width: 300}}
        />

        {
          // name ? <Text>{name}</Text> : <Text>no name</Text>
          // name && <Text>{name}</Text>
          // array.map(item=> <Text>{item.name}</Text>)
          // array.map(item=> {
          //   return <Text>{item.name}</Text>
          // })

          myname ? <Text>{myname}</Text> : <Text>No name</Text>
        }

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

        <TextInput
          placeholder="Type here"
          style={{hight: 50, borderWidth: 2}}
          onChangeText={text => {
            console.log(text);
            setmyname(text);
          }}
        />

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

          <MyJokes />
        </Modal>

        <Button
          title="New Modal"
          onPress={() => {
            setModal(true);
          }}
        />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    //  flexDirection:"row"
    // justifyContent:"space-between",
    // justifyContent:"space-evenly"
    justifyContent: 'space-around',
  },
});
