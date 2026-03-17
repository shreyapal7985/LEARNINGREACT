import React, { useState } from 'react';
import { View, Text , TextInput, Button } from "react-native";
const GetInput = () => {
    const [name,setName]= useState('')
    return(
        
        <View style={{borderWidth:3, borderColor:'green'}}>
            <Text style={{fontSize:30,color:'white'}}>
                Handling Get Input
            </Text>
            <Text style={{fontSize:30,color:'white'}}>
                Your Name:{name}
            </Text>
            <TextInput style={{fontSize:18,borderColor:'red' ,borderWidth:5, margin:10}} placeholder="Enter your name"  
            value={name}
            onChangeText={(text)=>setName(text)} ></TextInput>
            <Button  title='clear input value' onPress={()=>setName('')}> </Button>
            
        </View>

        
    )
}
export default GetInput;