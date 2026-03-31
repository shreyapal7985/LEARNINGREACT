//👉 Refs are used to access and manipulate components directly
//Ref is a way to directly access a component or store a value without re-rendering.
//it's similar like document.getElementById in js
//ye directly dom ko manipulate krta h  dom manipulation react native me axa nhi hota h
//age state se style wagaira change ho rhi ho to ussi se krna chahiye last option ref hona chahiye
import React, {useRef}from "react";
import {View,Text,Button,StyleSheet, TextInput} from 'react-native';
const App2=()=>{
const input=useRef();
    
    const updateInput=()=>{
        input.current.focus();
        input.current.setNativeProps({
            fontSize:30,
            color:'red'
        })
    }
    return(
        <View style={styles.main}>
            <Text style={styles.text}>ref in react native</Text>
            <TextInput ref={input} placeholder="enter ur name" style={styles.input}/>
            <TextInput placeholder="enter ur name" style={styles.input}/>
            <Button title="update" onPress={updateInput}/>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        marginTop:40,
        
    },
    text:{
        color:'white',
        fontSize:20

    },
    input:{
        borderColor:'blue',
        borderWidth:2,
        margin:10,
        fontSize:20

    }
})
export default App2;