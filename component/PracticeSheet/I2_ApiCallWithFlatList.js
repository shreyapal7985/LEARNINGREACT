import React, { useEffect,useState } from "react";
import {View,Text,FlatList}  from 'react-native';

const App2=()=>{
    const [data,setData]=useState([])
    const getApi= async ()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        let result=await fetch(url);
        result=await result.json();
        setData(result)
 }
    useEffect(()=>{
        getApi();
    })
    return(
        <View>
            <Text>Api Call With FlatList</Text>
            {
                data.length?
            <FlatList
                data={data}
                renderItem={({item})=><View>
                <Text>{item.id}</Text>
                </View>}
            />:null}
        </View>
    )
}
export default  App2;