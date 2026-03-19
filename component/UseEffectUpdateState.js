// we can use more than one useEffect inside a single component
//here we learn how to apply useEffect on specific state change simply we have to give the state name on [] square bracket
//once useEffect will update the value automatically when open the app at that alert shows not by the mounting it's just update the state automatically once
//if the state have the same value after the second updation then useEffect will not render the code, setAge after one press remains same 98 then useEffect wont work

import React, {useEffect, useState} from "react";
import {View,Button,Text} from 'react-native';
const App2=()=>{
    const [count,setCount]=useState(0);
    const [age,setAge]=useState(10);
    const [data,setData]=useState(0)
    useEffect(()=>{
        alert("hello");
        
    },[count,age])
    useEffect(()=>{
        alert('hello data')
    },[data])
    return(
        <View>
            <Text style={{fontSize:20}}>{data}UseEffect as ComponentDidUpdate {count}</Text>
            <Button title="count me" onPress={()=>setCount(count+1)}></Button>
            <Button title="press age" onPress={()=>setAge(98)}></Button>
            <Button title="press data" onPress={()=>setData(data+1)}></Button>
            <User info={{count,data}}/>
        </View>
    )
}
const User=(props)=>{
    useEffect(()=>{
        alert("run when props data is updated")
    },[props.info.data]
    )
    useEffect(()=>{
        alert("run when props count is updated")
    },[props.info.count])
return(
<View>
<Text>data:{props.info.data}</Text>
<Text>count:{props.info.count}</Text>
</View>
)
}
export default App2;