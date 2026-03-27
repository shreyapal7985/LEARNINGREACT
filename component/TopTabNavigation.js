//firstly install 'npm install @react-navigation/material-top-tabs'
//Second 'npm install react-native-pager-view' from the link "https://reactnavigation.org/docs/material-top-tab-navigator"
import React from "react";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
const App2 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name="Sign Up Page" component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
            <Text style={{ fontSize: 30 }}>Login</Text>
        </View>
    )
}
const SignUp = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{ fontSize: 30 }}>SignUp</Text>
        </View>
    )
}
export default App2;
