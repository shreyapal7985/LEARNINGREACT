//dafault button ke upar hum jada style nhi lga skte iske liye hum alternatives juse krte h buttons ka for styling purpose
// alternatives of Button 1)TouchableHighlights, 2)TouchableOpacity
import React from "react";
import { View,Button,Text ,TouchableHighlight,StyleSheet} from "react-native";
const Buttons=()=>{
    return(
        <View style={styles.main}>
            <Button title="by default button"></Button>
            <TouchableHighlight><Text style={[styles.button,styles.primary]}>Primary</Text></TouchableHighlight>
            <TouchableHighlight><Text style={[styles.button,styles.success]}>Success</Text></TouchableHighlight>
            <TouchableHighlight><Text style={[styles.button,styles.warning]}>Warning</Text></TouchableHighlight>
            <TouchableHighlight><Text style={[styles.button,styles.error]}>Error</Text></TouchableHighlight>
            <TouchableHighlight><Text style={styles.button}>Making Button</Text></TouchableHighlight>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        fontSize:25,
        color:'white',
        padding:10,
        borderRadius:10,
        margin:10,
        textAlign:'center',
        shadowColor:'red',
        elevation:30,
        opacity:1

    },
    primary:{
        backgroundColor:'gold'
    },
    success:{
        backgroundColor:'green'
    },
    warning:{
        backgroundColor:'skyblue'
    },
    error:{
        backgroundColor:'red'
    }
})
export default Buttons;