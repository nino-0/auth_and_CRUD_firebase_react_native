import React, { useState} from 'react';
import {Text, View, TextInput , TouchableOpacity} from 'react-native';
import firebase from "../config/firebase"

import styles from "./styles"
export default function DetailsFriend({navigation,route}) {
    const database = firebase.firestore()

    const [nomeEdit, setNomeEdit] = useState(route.params.nome)

    const idFriend = route.params.id
    function editFriend(nome,id){
       database.collection(route.params.idUser).doc(id).update({
           nome:nomeEdit
       })
       navigation.navigate("Lista de Amigos")
    }
   
    return (
    <View style ={styles.container}>
        
            <TextInput
      style ={styles.input}
      placeholder="Nome do Amigo"
      onChangeText = {setNomeEdit}
      value ={nomeEdit}
      />
      <TouchableOpacity style={styles.buttonNewFriend} onPress ={
        ()=>{
            editFriend(nomeEdit,idFriend)
        }
    }>
        <Text style={styles.saveButton}>Save</Text>
    </TouchableOpacity>
            
        </View>
    );
}