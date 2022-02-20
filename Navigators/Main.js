import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import Cart from '../Screen/Cart/Cart';
import ProductContainer from '../Screen/Products/ProductContainer';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}
     
    initialRouteName ='Home'
    >
      <Tab.Screen name="HomeMain" component={HomeNavigator}
      options={{tabBarIcon:({color})=>(
          <Icon
          name="home"
          style={{position: 'relative'}}
          color={color}
          size={30}
          />
      )}} />
      
       <Tab.Screen name="Cart" component={HomeNavigator}
      options={{tabBarIcon:({color})=>(
          <Icon
          name="shopping-cart"
          color={color}
          size={30}
          />
      )}} />
       <Tab.Screen name="Admin" component={HomeNavigator}
      options={{tabBarIcon:({color})=>(
          <Icon
          name="cog"
          color={color}
          size={30}
          />
      )}} />
       <Tab.Screen name="User" component={HomeNavigator}
      options={{tabBarIcon:({color})=>(
          <Icon
          name="user"
          color={color}
          size={30}
          />
      )}} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})