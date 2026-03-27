import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from './Home.js';
import {LoginPage} from './LoginPage.js';
import {Rightbtn} from './Rightbtn.js';
const Stack = createNativeStackNavigator();
const App2 = () => {
    const action = () => {
        alert("left bujtton pressed")
    }
    return (
        <NavigationContainer style={{flex:1}}>
            <Stack.Navigator screenOptions={
                {

                    headerStyle: {
                        backgroundColor: 'blue'
                    },
                    headerTintColor: 'pink',
                    headerTitleStyle: {
                        fontSize: 30
                    }
                }
            }>
                <Stack.Screen name='Login' component={LoginPage}
                    options={{
                        headerTitle: () => <View style={styles.btn}><Button title="left" onPress={action} /></View>,
                        headerRight: () => <Rightbtn />,
                        title: 'User Login',
                        headerStyle: {
                            backgroundColor: 'grey'
                        },
                        headerTintColor: 'white',

                    }}
                />
                <Stack.Screen name='Home1' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles=StyleSheet.create({
    btn:{
        width:50
    }
})



export default App2;