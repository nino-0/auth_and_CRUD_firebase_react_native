import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/view/Home';
import Login from './src/view/Login';
import NewUser from './src/view/NewUser';
import ListaAmigos from './src/view/ListaAmigos'
import NewFriend from './src/view/NewFriend';
import DetailsFriend from './src/view/DetailsFriend';


export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName ='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lista de Amigos" component={ListaAmigos} options ={{headerLeft:null}}/>
        <Stack.Screen name="NewUser" component={NewUser} />
        <Stack.Screen name="Adicionar novo amigo" component={NewFriend} />
        <Stack.Screen name="Detalhes amigo" component={DetailsFriend} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}