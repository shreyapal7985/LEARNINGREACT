import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 const Stack=createNativeStackNavigator();
 const App2 = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage}/>
                <Stack.Screen name='Home1' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
 }
 const Home =()=>{
    return(
        <View style={styles.main}>
            <Text style={{fontSize:25}}>Home Screen</Text>
            
        </View>

    )
 }
 const LoginPage=(props)=>{
    return(
        <View style={styles.main}>
            <Text style={{fontSize:25}}>Login Form </Text>
            <Button title="go to home screen" onPress={()=>props.navigation.navigate('Home1')}></Button>
        </View>
    )
 }
 const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50
    }
 })
 export default App2;