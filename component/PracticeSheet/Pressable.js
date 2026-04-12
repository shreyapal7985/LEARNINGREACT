import React from "react";
import {View,Text,Pressable,StyleSheet  } from 'react-native';
const App2=()=>{
    return(
        <View style={styles.main}>
            <Pressable 
            onLongPress={()=>alert("hello")}
            delayLongPress={3000}
           // onPressIn={()=>alert("pressin")}
            //onPressOut={()=>alert("press out")}
            >
                <View style={styles.btn}>
                <Text style={{fontSize:20}}>Pressable</Text>
                </View>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        
        btn:{
            padding:20,
            backgroundColor:"white",
            borderRadius:20,
            width:200,
            alignItems:'center'
            
            
        
        }
    }
)

export default App2;