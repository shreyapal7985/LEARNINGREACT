//By using the tops inside the Stack.screen by typing option and now we can apply the styling on the header 
//inside the option we can change the name or title of the header by using the title word
//If we want to style the header of specific page then we can use the options inside the Stack.Screen
//If we want to apply the style on all pages then we can use the screenOptions inside the Stack.Navigation
import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 const Stack=createNativeStackNavigator();
 const App2 = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerStyle:{
                        backgroundColor:'blue'
                    },
                    headerTintColor:'pink',
                    headerTitleStyle:{
                        fontSize:30
                    }
                }
            }>
            <Stack.Screen name='Login' component={LoginPage}
                options={{
                    title:'User Login',
                    headerStyle:{
                        backgroundColor:'grey'
                    },
                    headerTintColor:'white',
                    headerTitleStyle:{
                        fontSize:40
                    }
                }}
            />
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