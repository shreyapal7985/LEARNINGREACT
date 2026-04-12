//By Using PreMade Modal
import React,{useState} from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import { Modal } from 'react-native';
const App2 = ()=>{
    const [show,setShow]=useState(false)
    return(
        <View style={styles.main}>
        <Modal transparent={true} visible={show} animationType='fade'>
            <View style={styles.center}>
                <View style={styles.styling}>
                    <Text style={{fontSize:40}}>hello world</Text>
                    <Button title='close Modal' onPress={()=>setShow(false)}></Button>
                </View>
            </View>
        </Modal>


            <View style={styles.btn}>
            <Button title='open Modal' onPress={()=>setShow(true)}></Button>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        
    },
    btn:{
        flex:1,
        justifyContent:'flex-end'
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    styling:{
        backgroundColor:'white',
        padding:80,
        borderRadius:20,
        shadowColor:'orange',
        elevation:50
    }
})
export default App2;