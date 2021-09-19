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
export default function NewUser({navigation}) {
    const  [email,setEmail] = useState("");
    const  [password,setPassword] = useState("");
    const  [erroLogin,setErroLogin] = useState("");

    const singIn =()=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        
        navigation.navigate("Lista de Amigos",{idUser:user.uid})
        // ...
      })
      .catch((error) => {
        setErroLogin(true)
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

    }
    useEffect (()=>{
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {         
          
          navigation.navigate("Lista de Amigos",{idUser:user.uid})
        } 
      });

    },[]);
return (

  <KeyboardAvoidingView
    behavior = {Platform.OS === "ios"? "padding":"height"}
    style ={styles.container}
  >
     
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
      {email === ""|| password === "" ?
       <TouchableOpacity
      style = {styles.dis_botton}
      disabled = {true}
      >
      <Text style = {styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
      style = {styles.botton}
      onPress = {singIn} >
      <Text style = {styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>}
      

       
  </KeyboardAvoidingView>
);
}