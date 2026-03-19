// useEffect is used  for using the life cycle method in function component, not use in class component , also known as hook
//on line 10 we use square bracket so that console only run at the time of mounting(loading) not at updating time and unmounting time
//Without square bracket useEffect component will be render always whenever the state and props get changed
import React, {useEffect, useState} from "react";
import { View,Text } from "react-native";
import { Button } from "react-native";
const Use=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        alert("hello");
    },[])
    return(
        <View>
            <Text style={{fontSize:30}}>Life Cycle with UseEffect</Text>
            <Text style={{fontSize:30}}>Number:{count}</Text>
            <Button title="press me" onPress={()=>setCount(count+1)}></Button>
        </View>
    )
}
export default Use;