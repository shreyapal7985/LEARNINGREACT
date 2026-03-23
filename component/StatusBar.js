//Status Bar is the screen or display of top of the phone where battery and wifi is displayed
import React, {useState} from 'react';
import {View,Text,Button,StatusBar,StyleSheet,} from 'react-native';
const Status=()=>{
    const [hide,setHide]=useState(false);
    const [barstyle,setbarstyle]=useState("dark-content")
    return(
        <View style={styles.container}>
        <View style={styles.statusbarstyle}>
        <StatusBar
            backgroundColor="transparent"
            barStyle={barstyle}
            hidden={hide}
            
        /></View>
        <Button title='toggle status bar' onPress={()=>setHide(!hide)}></Button>
        <Button title='Update barStyle' onPress={()=>setbarstyle('light-content')}></Button>
            <Text>Status Bar</Text>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            
            
            
        },
        statusbarstyle:{
            backgroundColor:'red',
            height:40
        }
    }
)
export default Status;