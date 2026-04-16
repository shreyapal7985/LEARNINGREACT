import React, { useEffect, useState } from 'react';
import {View,Text, ScrollView} from 'react-native';
const App2=()=>{
    const [data,setData]=useState([]);
    const getApi= async ()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        let result=await fetch(url);
        result=await result.json();
        setData(result)
    }
    useEffect(()=>{
        getApi();
    },[])
    return(
        <ScrollView >
            <Text style={{color:'grey', fontSize:50}}>Api Call With List</Text>
            {
                data.length?
                data.map((item)=><View key={item.id} style={{padding:5,borderBottomColor:'yellow',borderBottomWidth:3}}>
                    <Text style={{color:'white'}}>{item.id}</Text>
                    <Text style={{color:'white'}}>{item.title}</Text>
                </View>)
                :null
            }
        </ScrollView>
    )
}
export default App2;