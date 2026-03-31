import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
const App2= ()=>{
    const [data,setData]=useState('');
const searchUser= async (text)=>{
    const url=`http://10.239.150.152:3000/users?q=${text}`;
    let result=await fetch(url);
    result= await result.json();
    if(result){
        setData(result)
    }
}

    return(
        <View style={styles.main}>
        <TextInput style={styles.input}
            placeholder={'Search bar'} 
            placeholderTextColor={'black'}
            onChangeText={(text)=>searchUser(text)}
        />
        {
            data.length ? data.map((item)=><View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            </View>)
            :null
        }
        </View>
    )
}
 const styles=StyleSheet.create({
    main:{
        marginTop:40,
        backgroundColor:"white",
        flex:1
    },
    text:{
        fontSize:40
    },
    input:{
        borderColor:"blue",
        borderWidth:4,
        color:'black',
        borderRadius:10,
        marginBottom:10,
        fontSize:30
    }
 })
export default App2;