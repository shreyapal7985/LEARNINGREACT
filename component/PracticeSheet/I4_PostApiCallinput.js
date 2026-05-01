import React, { useState } from 'react';
import {Text,View,Button, TextInput, StyleSheet} from 'react-native';
 const App2=()=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState('');
    const saveApiData=async ()=>{
const url='http://192.168.1.8:3000/users';
let result=await fetch(url,{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name,age,email})
})
if(result){
alert("data insert")
}

    }   
     return(
        <View>
            <Text>Post Api Call with input fields</Text>
            <TextInput placeholder='enter your name' value={name} onChangeText={(text)=>setName(text)} style={styles.textInput}/>
            <TextInput placeholder='enter your age' value={age} onChangeText={(text)=>setAge(text)} style={styles.textInput}/>
            <TextInput placeholder='enter your email' value={email} onChangeText={(text)=>setEmail(text)} style={styles.textInput}/>
            <Button title='save data' color={'red'} onPress={saveApiData}/>
        </View>
    )
 }
 const styles=StyleSheet.create({
    textInput:{
        margin:10,
        borderColor:'red',
        borderWidth:1
    }

 })
 export default App2;