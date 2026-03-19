//flex direction apply on the parent of the child component
//flex:1 is applied on both ya otherwise we can also mention the height of the parent container so that flex can take the as per their parent container
import React from "react";
import {View,Text,StyleSheet} from 'react-native';
const Flex=()=>{
    return(
        <View style={styles.main}>
  <View style={styles.box1}>
    <View style={styles.innerbox1}></View>
    <View style={styles.innerbox2}></View>
    <View style={styles.innerbox3}></View>
  </View>


  <View style={ styles.box2} />
  <View style={ styles.box3} />
  <View style={styles.box4} />

</View>
    )
}
const styles=StyleSheet.create(
    {
        main:{
            flex:1,
            
        },
        box1:{
             flex: 2,
              backgroundColor: 'grey' ,
              flexDirection:'row'
        },
        box2:{
             flex: 1,
              backgroundColor: 'yellow'
        },
        box3:{
             flex: 1,
              backgroundColor: 'orange'
        },
        box4:{
             flex: 1,
              backgroundColor: 'pink'
        },
        innerbox1:{
            flex:1,
            backgroundColor:'red',
            margin:15
        },
         innerbox2:{
            flex:1,
            backgroundColor:'blue',
            margin:15
        },
         innerbox3:{
            flex:1,
            backgroundColor:'brown',
            margin:15
        }
    }
)
export default Flex;