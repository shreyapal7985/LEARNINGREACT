import React,{useState, useEffect} from "react";
import { View,Text,StyleSheet, Button } from "react-native";
const App2=()=>{
    const [data,setData]=useState([]);
    const getApi= async ()=>{
const url="http://10.239.150.152:3000/users";
let result= await fetch(url);
result=await result.json();
if(result){
    setData(result)
}
    }
    const deleteUser= async(id)=>{
const url="http://10.239.150.152:3000/users";
let result=await fetch(`${url}/${id}`,{
    method:"delete"
});
result=await result.json();
if(result){
    alert("user dlt")
    getApi()
}
    }
    useEffect(()=>{
        getApi()
    },[])
    return(
        <View style={styles.main}>
        <View style={styles.dataWrapper}>
            <View style={{flex:1}}><Text>Id</Text></View>
                    <View style={{flex:1}}><Text>Name</Text></View>
                    <View style={{flex:1}}><Text>Age</Text></View>
                    <View style={{flex:1.5}}><Text>Operations</Text></View>
                
        </View>
            {
                data.length?data.map((item)=><View key='item.id' style={styles.dataWrapper}>
                <View style={{flex:1}}><Text>{item.id}</Text></View>
                    <View style={{flex:1}}><Text>{item.name}</Text></View>
                    <View style={{flex:1}}><Text>{item.age}</Text></View>
                    <View><Button title="Update"></Button></View>
                    <View><Button title="Delete" onPress={()=>deleteUser(item.id)}></Button></View>
                </View>):null
            }
        </View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
            flex:1,
            marginTop:40
        },
        dataWrapper:{
        
        flexDirection:'row',
        justifyContent:"space-around",
        backgroundColor:'orange',
        margin:5
        }
    }
)
export default App2;