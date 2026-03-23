//Platform is related to android and ios if we want to apply some specific condition on the platform basis with the help of Platform  Component
import React from "react";
import {View,Text,Platform,StyleSheet} from 'react-native';
const Platforms=()=>{
    return(
        <View style={styles.main}>
            <Text style={{fontSize:30}}>Platform:{Platform.OS}</Text>
            {
                Platform.OS==='android'?<View style={{backgroundColor:'red',height:40,width:40}}/>:
                <View style={{ backgroundColor:'green',height:40,width:40}}/>
            }
            <Text style={styles.text}>hello</Text>
            <Text style={{fontSize:30}}>{JSON.stringify(Platform.constants.reactNativeVersion.major)}</Text>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
            flex:1,
            justifyContent:'center'
        },
        text:{
            color:Platform.OS=='android'?'orange':'blue'
        }
    }
)
export default Platforms;