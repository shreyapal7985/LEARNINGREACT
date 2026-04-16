import React, { useEffect, useState } from "react";
import {View,Text} from 'react-native';
const App2=()=>{
    const [data,setData]=useState(undefined);
    const getApi=async ()=>{
const url="https://jsonplaceholder.typicode.com/posts/1";
let result=await fetch(url);
result=await result.json();
setData(result);

    }

    useEffect(()=>{
        getApi();
    },[])
    return(
        <View>
            <Text>Api call</Text>
           {data?
           <View><Text>{data.id}</Text>
           <Text>{data.title}</Text>
           <Text>{data.userId}</Text></View>
           :
           null}
        </View>
    )
}
export default App2;