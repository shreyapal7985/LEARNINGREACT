//Pressabale is like btn in which we can apply style on the button and use features like[LongPress,PressIn,PressOut], long press takes 500 milisecond to display the msg
import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native';
const Pressabalebtn = ()=>{
    return(
        <View style={styles.main}>
            <Pressable 
            onPress={()=>alert("normal press")}
            onLongPress={()=>alert("long prrss")}
            onPressIn={()=>alert("hold the btn msg will display")}
            onPressOut={()=>alert("leave the btn msg will display")}>
                <Text style={styles.pressbtn}>Pressabale</Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center'
    },
    pressbtn:{
        backgroundColor:'blue',
        color:'white',
        padding:10,
        margin:10,
        fontSize:16,
        borderRadius:10,
        textAlign:'center'
    }
})
export default Pressabalebtn;