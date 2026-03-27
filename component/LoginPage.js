//to pass static data from login screen to home screen we use object inside the onPress home1 ke bgl me
import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,} from 'react-native';
import { TextInput } from 'react-native';
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    }
})
 export const LoginPage=(props)=>{
    const [name,setName]=useState('');
    const age=34
    return(
        <View style={styles.main}>
            <Text style={{fontSize:25}}>Login Form </Text>
            <TextInput  style={{fontSize:20,borderColor:'black',borderWidth:1,width:160,textAlign:'center',color:'black'}} placeholder='Enter text' placeholderTextColor={'black'} onChangeText={(text)=>setName(text)}/>
            <Button title="go to home screen" onPress={()=>props.navigation.navigate('Home1',{name,age})}></Button>
        </View>
    )
 }
 