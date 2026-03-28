//Flat list can apply with array of object data ex=[{"id"=1}] it cant apply with data which is inside the object
import React, {useEffect,useState} from "react";
import {View,Text,FlatList} from 'react-native';
const App2 =()=>{
    const [data,setData]=useState([]);
    const getApi = async ()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        let result=await fetch(url);
        result= await result.json();
        setData(result);
    }
    useEffect(()=>{
        getApi();
    },[])
    return(
        <View>
        <Text style={{fontSize:40,color:'white',marginTop:40,borderBottomColor:'pink',borderBottomWidth:2}}>Api Call with the flatList</Text>
        {
            data.length?
            <FlatList
                data={data}
                renderItem={({item})=><View style={{padding:10}}>
                    <Text style={{fontSize:20,color:'white',backgroundColor:'orange'}}>{item.id}</Text>
                    <Text style={{fontSize:20,color:'white',}}>Title:{item.title}</Text>
                    <Text style={{fontSize:20,color:'white',borderBottomColor:'pink',borderBottomWidth:2}}>Body:{item.body}</Text>
                </View>}
            />:
            null
        }
    

        </View>
    )
}
export default App2;
