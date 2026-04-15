 import React,{useState} from 'react';
 import {View,Text,Button, TextInput} from 'react-native';
  const Login=(props)=>{
    const [name,setName]=useState("");
    const age=34
    return(
         
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Login Page</Text>
            <TextInput placeholder='enter your name' placeholderTextColor={'black'} onChangeText={(text)=>setName(text)}
                style={{color:'black',borderColor:'black',borderWidth:5}}
            />
            <Button title="go to home " onPress={()=>props.navigation.navigate("Home",{name,age})}></Button>
        </View>
    )
}
export default Login;