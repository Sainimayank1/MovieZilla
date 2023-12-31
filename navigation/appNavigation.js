import React,{useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InfineScrollScreen from "../screens/InfineScrollScree";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movies"
          component={MovieScreen}
        />
         <Stack.Screen
          name="Person"
          component={PersonScreen}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="AllMovie"
          component={InfineScrollScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
