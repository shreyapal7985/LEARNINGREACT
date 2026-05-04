import React, { useActionState, useState } from 'react';
import {Text,View,Button, TextInput, StyleSheet} from 'react-native';
 const App2=()=>{
    
    const [nameError,setNameError]=useState(false);
    const [ageError,setAgeError]=useState(false);
    const [emailError,setEmailError]=useState(false);

    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState('');

    const saveApiData=async ()=>{
{!name?setNameError(true):setNameError(false)}
{!age?setAgeError(true):setAgeError(false)}
{!email?setEmailError(true):setEmailError(false)}



if(!name||!age||!email){
    return false;
}

const url='http://192.168.1.8:3000/users';
let result=await fetch(url,{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name,age,email})
})
result= await result.json();
if(result){
alert("data insert")
}

    }   
     return(
        <View>
            <Text>Post Api Call with input fields</Text>
            <TextInput placeholder='enter your name' value={name} onChangeText={(text)=>setName(text)} style={styles.textInput}/>
            {nameError?<Text>please enter a valid name</Text>:null}
            <TextInput placeholder='enter your age' value={age} onChangeText={(text)=>setAge(text)} style={styles.textInput}/>
            {ageError?<Text>please enter valid age</Text>:null}
            <TextInput placeholder='enter your email' value={email} onChangeText={(text)=>setEmail(text)} style={styles.textInput}/>
            {emailError?<Text>enter a valid emailid</Text>:null}
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