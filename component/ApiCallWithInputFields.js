import React ,{useState} from "react";
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';
 const App2=()=>{
    const [name,setName]=useState([]);
    const [age,setAge]=useState([]);
    const saveApi= async()=>{
        alert(name);
        alert(age)
        const url='http://10.239.150.152:3000/users';
let result=await fetch(url,{
    method:"post",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,age})
}
)
result=await result.json();
if(result){
    alert("data added")
}

    }
    return(
        <View style={styles.main}>
        <Text style={styles.text}>Post Api Call With Input Fields or Dynamic data</Text>
        <TextInput placeholder="Enter your name" style={styles.input} onChangeText={(text)=>setName(text)}/>
<TextInput placeholder="Enter your age" style={styles.input} onChangeText={(text)=>setAge(text)}/>
<Button title="save data" onPress={saveApi}/>

        </View>
    )
 }
 const styles=StyleSheet.create(
    {
        main:{
            marginTop:40,
            
        },
        text:{
color:'white',

fontSize:25
        },
        input:{
            borderColor:'grey',
            borderWidth:1,
            fontSize:20,
            margin:10
        }
    }
 )
 export default App2;