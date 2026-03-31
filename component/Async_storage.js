//Async storage is a permanent storage it'a local host storage , it's not delete the data automatically example login form me jb tb hum logout nhi krte h tb tk data rheta h  
import React, { useState } from "react";
import {View,Text,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App2=()=>{
    const [user,setUser]=useState('');
    const setData= async ()=>{
       await AsyncStorage.setItem("user","shreya")
    }
    const getData= async()=>{
        const name= await AsyncStorage.getItem("user");
        setUser(name);

    }
    const removeData= async()=>{
        await AsyncStorage.removeItem("user");
        setUser('')
    }
    return(
        <View style={{marginTop:40}}>,
            <Text style={{fontSize:30,color:'white'}}>AsynStorage with react native:{user}</Text>
            <Button title="Set Data" onPress={setData}/>
            <Button title="Get Data" onPress={getData}/>
            <Button title="Remove Data" onPress={removeData}/>
        </View>
    )
}
export default App2;