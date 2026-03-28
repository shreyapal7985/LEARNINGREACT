import React,{useEffect,useState} from 'react';
import {View,Text, ScrollView} from 'react-native';
const App2 = ()=>{
    const [data, setData] =useState([]);
    const getApi = async ()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result=await result.json();
        setData(result);

    }
    useEffect(()=>{
        getApi();
    },[])
    return(
        <ScrollView><Text style={{fontSize:40, color:'white',marginTop:40,padding:10}}>Api Data with MapList</Text>
        {
            data.length? 
            data.map((item)=>
            <View key={item.id} style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:2}}>
                <Text style={{fontSize:20,color:'white',backgroundColor:'pink'}}>Id:{item.id}</Text>
                <Text style={{fontSize:20,color:'white'}}>Title:{item.title}</Text>
                <Text style={{fontSize:20,color:'white'}}>Body{item.body}</Text>
            </View>)
            :null
        }

        </ScrollView>
    )
}
export default App2;