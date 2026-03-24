//Modal is used to create the dialog box
import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native';
const CustomModal=()=>{
    const [showModal,setModal]=useState(false);
    return(
        <View style={styles.main}>
        {
            showModal?
        <View style={styles.modal}>
        <View style={styles.body}>
        <Text>hello Custom Dialog Box</Text>
            <Button title="close dialog" onPress={()=>setModal(false)}></Button>
            </View>
        </View>:null}
            <Button title="open dialog" onPress={()=>setModal(true)}></Button>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50
    },
    modal:{
        flex:1,
        backgroundColor:'rgba(50,50,50,.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
backgroundColor:'#fff',
height:300,
width:300,
padding:20,
justifyContent:'flex-end',
borderRadius:20
    }
})
export default CustomModal;