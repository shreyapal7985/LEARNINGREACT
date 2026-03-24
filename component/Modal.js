//Modal takes the whole width of the screen and set the backgroundColor white so, to display or fetch the remaining items on the screen we require transparent value must be true
import React, { useState } from "react";
import {View,Text,Button,StyleSheet,Modal,} from 'react-native';
const ModalComponent=()=>{
      const [showModal,setModal]=useState(false);
    return(
        <View style={styles.main}>
        <Modal transparent={true}
        visible={showModal}
        animationType="slide">
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello code step by step</Text>
                    <Button title="close modal" onPress={()=>setModal(false)}></Button>
                </View>
            </View>
        </Modal>
        
            <View style={styles.btnView}><Button title="open modal" onPress={()=>setModal(true)}></Button></View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
      
      flex: 1,
        backgroundColor:'white'

    },
    btnView:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        
    },
    centerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        backgroundColor:'skyblue',
        padding:40,
        borderRadius:20,
        shadowColor:'black',
        elevation:50
        
    },
    modalText:{
color:'white',
fontSize:20

    }

})
export default ModalComponent;