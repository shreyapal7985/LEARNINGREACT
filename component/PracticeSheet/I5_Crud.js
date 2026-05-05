import React, { useEffect, useState } from "react";
import { View,Text,Button, StyleSheet, Modal } from "react-native";
const App2=()=>{
    const [data,setData]=useState('');
    const [showModal,setShowModal]=useState(false);
    const [selectedUser,setSelectedUser]=useState(undefined);
    const getapi=async()=>{
        const url='http://192.168.1.8:3000/users';
        let result=await fetch(url);
        result= await result.json();
        setData(result);

    }
    const datadlt= async(id)=>{
        const url="http://192.168.1.8:3000/users";
        let result= await fetch(`${url}/${id}`,{
            method:'delete'
        })
        result=await result.json();
        if(result){
            console.warn("user dlt");
            getapi();
        }

    }
    useEffect(()=>{
        getapi();
    },[])

const updateData=(data)=>{
    setShowModal(true)
    setSelectedUser(data)
}
    return(
        <View style={styles.container}>
        <View style={styles.innerContainer}>
        <View style={{flex:1, backgroundColor:'orange'}}><Text>Name</Text></View>
            <View style={{flex:1, backgroundColor:'pink'}}><Text>Age</Text></View>
            <View style={{flex:2, backgroundColor:'yellow'}}><Text>Operation</Text></View>
            </View>
            {data?
            data.map((item,index)=><View style={styles.innerContainer}>


            <View style={styles.innerView}><Text>{item.name}</Text></View>
            <View style={styles.innerView}><Text>{item.age}</Text></View>
            <View style={styles.innerView}><Button title="delete" color={'red'} onPress={()=>datadlt(item.id)}/></View>
            <View style={styles.innerView}><Button title="update" color={'grey'} onPress={()=>updateData(item)} /></View></View>)
            :null}
            <Modal visible={showModal} transparent={true}>
<Users setShowModal={setShowModal} selectedUser={selectedUser}/>
            </Modal>
        </View>
    )
}
const Users=(props)=>{
    return(
<View style={styles.modalCenter}>
    <View style={styles.modalText}><Text style={{fontSize:30}}>hello{props.selectedUser.name}</Text>
    <Button title="close" color={'grey'} onPress={()=> props.setShowModal(false)} /></View>
</View>
)}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    innerContainer:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'white',
        margin:10,
        padding:10,
        backgroundColor:'white'
    },
    innerView:{
        flex:1
    },
    modalCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    modalText:{
        borderColor:'white',
        borderWidth:3,
        padding:30,
        backgroundColor:'pink',
        borderRadius:25,
        width:300
    }

})
export default App2;