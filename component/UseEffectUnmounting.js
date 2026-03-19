//Without return function  inside the useEffect , alert display the message when show is true, otherwise with return function alert display the message when show is hide/false
//setinterval humlog use krte h timer ke liye agr humko timer nhi chahiye jb humari detais hide ho jaye pr setinterval continuously chlta rhega aur space leta rhega isiliye hum useEffect ka use krte h taki ek baar details unmount hone pr timer background me na chle
import React,{useEffect,useState} from 'react';
import {View,Text,Button} from 'react-native';
const App3=()=>{
    const [show,setShow]=useState(true)
    return(
        <View>
            <Text style={{fontSize:25,color:'white'}}>useEffect for Unmount Component</Text>
            <Button title='toggle' onPress={()=>setShow(!show)}/>
            {show?<Student/>:null}
        </View>
    )
}
const Student=()=>{
    let timer=setInterval(()=>{
        alert("timer has been rendered")
    },5000)
    useEffect(()=>{
        return()=> clearInterval(timer)
    })
    {/*useEffect(()=>{
        return ()=>{ alert("details are hide ")}
    })*/}
    return(
        <View>
            <Text>Student Details</Text>
        </View>
    )
}
export default App3;