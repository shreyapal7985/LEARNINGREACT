import React from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const App2=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Login" component={Login}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Home=()=>{
    return(
        <View>
            <Text>Home page</Text>
        </View>
    )
}
const Login=()=>{
    return(
        <View>
            <Text>Login Page</Text>
        </View>
    )
}
export default App2;