import React,{useState,useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
   Platform,
} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import firebase from "../config/firebase"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./styles"
import { FlatList } from 'react-native-gesture-handler';
//{navigation,route}
export default function ListaAmigos({navigation,route}) {
    const [listaAmigos,setListaAmigos] = useState([])
    const database = firebase.firestore()

    useEffect(()=>{
        database.collection(route.params.idUser).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(),id: doc.id})
            })
           setListaAmigos(list) 
        })
    },[])
    const logOut = ()=>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            navigation.navigate("Login")
          }).catch((error) => {
            // An error happened.
          });
    }
    function deleteFriend(id){
        //route.params.idUser
        database.collection(route.params.idUser).doc(id).delete()
    }
    
return (

  <View style ={styles.listContainer}>

    <FlatList
     showsVerticalScrollIndicator = {false}
    data={listaAmigos}
    renderItem ={ ( {item} ) =>{
        return(
        <View style ={styles.friend}>
            
            <Text 
            style = {styles.descriptionTask}
            onPress ={()=>{
                navigation.navigate("Detalhes amigo",{
                    id:item.id,
                    nome:item.nome,
                    idUser: route.params.idUser
                })
            }}
            >
                {item.nome}
            </Text>
            <TouchableOpacity 
            style={styles.DeleteFriend}
             onPress ={()=>{
                 deleteFriend(item.id)
                }}
             >
            <FontAwesome
            name = "star"
            size = {23}
            color = "#F92e6a"
            >
            </FontAwesome>   
            </TouchableOpacity>
        </View>)
    }}
    />
    <TouchableOpacity style={styles.buttonNewFriend} onPress ={
        ()=>{
            navigation.navigate("Adicionar novo amigo",{idUser: route.params.idUser})
        }
    }>
        <Text style={styles.iconButton}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonLogout} onPress ={logOut}>
        <Text style={styles.iconButton}>-</Text>
    </TouchableOpacity>
      
      
  </View>
    
      

 
);
}