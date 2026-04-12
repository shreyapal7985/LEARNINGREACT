import {View,Text,Platform,StyleSheet} from 'react-native';
const App2=()=>{
    return(
        <View>
            
                <Text style={styles.txt}> Android:{Platform.OS}</Text>
                {
                    Platform.OS=='android'?
                <View style={styles.box}></View>:
                <View style={styles.box1}></View>
                }
                <Text style={styles.hello}>hello</Text>
                <Text style={styles.txt}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
        
        </View>
    )
}
const styles=StyleSheet.create({
    txt:{
        fontSize:20,
        color:"white"
    },
    box:{
        height:100,
        width:100,
        backgroundColor:'gold'
    },
    box1:{
        height:100,
        width:100,
        backgroundColor:'green'
    },
    hello:{
        color:Platform.OS=='android'?"red":"green",
        fontSize:Platform.OS=='ios'?23:100
    }


})
export default App2;