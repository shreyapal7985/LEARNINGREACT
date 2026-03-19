//Toggle Component button means from one button we can hide aur show the component, see the onPress condition
import React,{useState} from "react";
import{View,Text,Button} from 'react-native';
const ShowHide=()=>{
    const [show,setHide]=useState(true)
    return(
        <View
        ><Text style={{fontSize:25,color:'white'}}>Show and Hide Component</Text>
        <Button title="Hide" onPress={()=>setHide(false)}></Button>
        <Button title="Show" onPress={()=>setHide(true)}></Button>
        <Button title="Toggle Component" onPress={()=>setHide(!show)}></Button>
        {
            show ? <User />: null
        }

        </View>
    )
}
const User =()=>{
    return(
        <View><Text style={{fontSize:25,color:'pink'}}>
            User Component
        </Text></View>
    )
}
export default ShowHide;