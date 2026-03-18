import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState("false")
    const resetDetails=()=>{
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('');

    }

    return (
        <View style={{ borderColor: 'blue', borderWidth: 4 }}>
            <TextInput style={style.Input}placeholder=' your name ' onChangeText={(text) => setName(text)} value={name}></TextInput>
            <TextInput style={style.Input} secureTextEntry placeholder='enter your password ' onChangeText={(text) => setPassword(text)} value={password}></TextInput>
            <TextInput style={style.Input} placeholder='enter your email ' onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <Button title='Print details' onPress={() => setDisplay(true)}></Button>
            <Button title='clear details'
            onPress={resetDetails}></Button>
            <Text>{display===true?<View><Text>
                user name:{name}
            </Text>
            <Text>password:{password}</Text>
            <Text>email:{email}</Text>
            </View>:null}</Text>
                </View>
                
            
        
    )
}
 const style=StyleSheet.create({

 
    Input:{
        borderColor:'blue',
        borderWidth:3
    }

    }
 )
 
export default Form;