
import React,{useState,useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import firebase from "../config/firebase"
import { KeyboardAvoidingView, Platform } from 'react-native';
import styles from "./styles"
export default function Login({navigation}) {
    const  [email,setEmail] = useState("");
    const  [password,setPassword] = useState("");
    const  [erroLogin,setErroLogin] = useState("");



   const loginFirebase =() =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
        
      navigation.navigate("Lista de Amigos",{idUser:user.uid})
      // ...
    })
    .catch((error) => {
      setErroLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
    });
   }


    useEffect (()=>{
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         
          navigation.navigate("Lista de Amigos",{idUser: user.uid})
          // ...
        }
      });
    },[]);



return (

  <KeyboardAvoidingView
    behavior = {Platform.OS === "ios"? "padding":"height"}
    style ={styles.container_01}
  >
      <Image source = {require('../assets/image/banner_friend.jpg')}
      style = {styles.logo}
    />
      <TextInput
      style ={styles.input}
      placeholder="Digite seu email"
      onChangeText = {(text)=>setEmail(text)}
      value ={email}
      />
      <TextInput
      style ={styles.input}
      secureTextEntry = {true}
      placeholder="Digite sua senha"
      onChangeText = {(text)=>setPassword(text)}
      value ={password}
      />
      {erroLogin === true ? <View>
        <MaterialCommunityIcons name='alert-circle'
        size = {24}
        color = "#C0C0C0"
        />
        <Text>LOGIN INVALIDO</Text>
      </View>: <View/>}
      {email === ""|| password === "" ? <TouchableOpacity
      style = {styles.dis_botton}
      disabled = {true}
      >
      <Text style = {styles.buttonText}>Entrar</Text>
      </TouchableOpacity>:<TouchableOpacity
      style = {styles.botton}
      onPress = {loginFirebase} >
      <Text style = {styles.buttonText}>Entrar</Text>
      </TouchableOpacity>}
      <Text 
      style ={styles.text_button}
      onPress = {()=> navigation.navigate("NewUser")}
      >
        Inscreva-se
      </Text>

       
  </KeyboardAvoidingView>
    // <View style={styles.container_01}>
    //   <Image source = {require('../assets/image/banner_friend.jpg')}
    //   style = {styles.logo}
    //   />
    //   <TextInput
    //   style ={styles.input}
    //    placeholder="Digite seu email"
    //   />
    //   <TextInput
    //   style ={styles.input}
    //   secureTextEntry = {true}
    //    placeholder="Digite sua senha"
    //   />
    //   <TouchableOpacity
    //   style = {styles.botton}
    //   onPress = {() => navigation.navigate('Home',{
    //     id: 30
    // })}
    //    >
    //     <Text style = {styles.buttonText}>Entrar</Text>
    //   </TouchableOpacity>

    // </View>
  );
}


