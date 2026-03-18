// useEffect is used  for using the life cycle method in function component, not use in class component , also known as hook
//on line 10 we square bracket so that console only ren at the time of mounting(loading) not at updating time and unmounting time
import React, {useEffect, useState} from "react";
import { View,Text } from "react-native";
import { Button } from "react-native/types_generated/index";
const Use=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.warn("hello");
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