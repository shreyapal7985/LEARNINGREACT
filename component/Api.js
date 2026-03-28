//Go to "json placeholder" site to get the premade Api
//await ko use krne ke liye hume function ko asyn bnana pdta h
//👉 We use await to wait for the API response before moving to the next line
//Without await Problems=>  ❌ You don’t get actual data
//❌ Code runs immediately without waiting
//With await solution => ✔️ It waits for API response
//✔️ Then moves to next line
//✔️ You get real data
import React,{useEffect, useState} from "react";
import {View,Text} from 'react-native';
const App2=()=>{
    const [data,setData]=useState(undefined);
    const getApi= async()=>{
        const url="https://jsonplaceholder.typicode.com/posts/1";
        let result= await fetch(url);{/* 👉 This gives you a Response object, NOT actual data*/ }
        result= await result.json();{/*Converts raw response → JSON
✔️ Extracts actual data from API*/}
        setData(result);
    }
    useEffect(()=>{
        getApi();
    },[])
    return(
        <View>
            <Text style={{fontSize:50,color:'white'}}>API Call</Text>
            {
                data?<View>
                    <Text style={{fontSize:30,color:'white'}}>{data.id}</Text>
                    <Text style={{fontSize:30,color:'white'}}>{data.userId}</Text>
                    <Text style={{fontSize:30,color:'white'}}>{data.title}</Text>
                    <Text style={{fontSize:30,color:'white'}}>{data.body}</Text>
                </View>:null
            }
        </View>

    )
}
export default App2;