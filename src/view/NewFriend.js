import React, { useState} from 'react';
import {Text, View, TextInput , TouchableOpacity} from 'react-native';
import firebase from "../config/firebase"

import styles from "./styles"
export default function NewFriend({navigation,route}) {
    const database = firebase.firestore()
    const [nome, setNome] = useState(null)

    function addFriend(){
        database.collection(route.params.idUser).add({
            nome:nome,
        })
        navigation.navigate('Lista de Amigos',{idUser:route.params.idUser})
    }
    return (
        <View style ={styles.container}>
            <TextInput
      style ={styles.input}
      placeholder="Nome do Amigo"
      onChangeText = {(text)=>setNome(text)}
      value ={nome}
      />
      <TouchableOpacity
      style = {styles.botton}
      onPress = {addFriend} >
      <Text style = {styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
            
        </View>
    );
}