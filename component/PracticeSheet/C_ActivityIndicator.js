import React,{useState} from 'react';
import {View,Text,ActivityIndicator,Button} from 'react-native';
 const App2=()=>{
    const [show,setShow]=useState(false);
    const displayLoader=()=>{
        setShow(true)
        setTimeout( ()=>{
            setShow(false)
},1000)
    }
    return(
        <View>
            <ActivityIndicator size={100} color="red" animating={show}/>
            <Button title='show loader' onPress={displayLoader}/>
        </View>
    )
 }
 export default App2;