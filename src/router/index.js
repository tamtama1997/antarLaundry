import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import Akun from '../pages/Akun';
import Pesanan from '../pages/Pesanan';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp =() =>{
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown:false}} />
        <Tab.Screen name="Akun" component={Akun} options={{headerShown:false}} />
      </Tab.Navigator>
  );
}
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
