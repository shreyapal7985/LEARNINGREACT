import React,{useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
const RadioBtn=()=>{
    const [radio,setRadio]=useState(0);
    return(
        
        <View style={styles.main}>
            <TouchableOpacity onPress={()=>setRadio(1)}>
                <View style={styles.wrapper}>
                <View style={styles.radio}>
                    
                {radio ===1?<View style={styles.radioBg}></View>:null}
                    
                </View>
                <Text style={styles.radiobox}>RadioBtn</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setRadio(2)}>
                <View style={styles.wrapper}>
                <View style={styles.radio}>
                  {radio===2?  <View style={styles.radioBg}></View>:null}
                </View>
                <Text style={styles.radiobox}>RadioBtn</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'

        },
        radiobox:{
            color:'white',
            
        
        

        },
        radio:{
            height:40,
            width:40,
            borderWidth:5,
            borderColor:'white',
            borderRadius:20,
            margin:10

        },
        wrapper:{
            flexDirection:'row',
            alignItems:'center'
        },
        radioBg:{
            height:20,
            width:20,
            backgroundColor:'red',
            borderRadius:10,
            margin:5
        }
    }
)
export default RadioBtn;