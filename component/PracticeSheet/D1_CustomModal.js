import React,{useState} from 'react';
import {View, Text,Button,StyleSheet} from 'react-native';
const App2=()=>{
    const [show,setShow] = useState(false)
    return(
<View style={styles.main}>
{show?
<View style={styles.modal}>
    <View style={styles.body}>
        <Text style={styles.txt}>SHow MODAL</Text>
        <Button title='close Modal' onPress={()=>setShow(false)}></Button>
    </View>
</View>:
null}
    <Button title='open modal' onPress={()=>setShow(true)}></Button>
</View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'flex-end'
    },
    modal:{
        backgroundColor:"grey",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        backgroundColor:'white',
        height:200,
        width:300,
        justifyContent:'center',
        padding:10,
        borderRadius:20,
        shadowColor:'blue',
        elevation:20
    },
    txt:{
        fontSize:30
    }
})
export default App2;