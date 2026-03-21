import React,{useState} from "react";
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';
import { Button } from "react-native";
const Loader=()=>{
    const [show,setShow]=useState(false);
    const displayLoader = ()=>{
        setShow(true)
        setTimeout(()=>{
            setShow(false)
            alert("hey laudin Anjali Pal")
        },2000)
    }
    return(
        <View style={styles.main}>
        {/*<ActivityIndicator size={100} color={'red'} animating={show}/>*/}
        {
            show?<ActivityIndicator size={100} color={'red'}/>:null
        }
        <Button title='show load' onPress={displayLoader}></Button>
        
            <Text>Activity Indicator</Text>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
           flex:1,
           justifyContent:'center'
        }
    }
)
export default Loader;