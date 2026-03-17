import { Text, View, StyleSheet, } from "react-native";
import Exstyles from './ExternalCss';

const Internal = () => {
    return(
        <View>
            <Text style={styles.textBox}>Hello internal Css</Text>
            <Text style={Exstyles.textBox}>Hello External Css</Text>
            <Text style={[Exstyles.textBox,styles.textBox,{color:'brown'}]}>Hello External Css and Internal css and inline css</Text>
        </View>
    );
};
 const styles=StyleSheet.create(
    {
      textBox:{
        color:'blue',
        fontSize:25,
        backgroundColor:'pink',
        marginBottom:10,
        padding:10,
        borderRadius:10,
        height:100,
        textAlignVertical:'center',
        textAlign:'center',
        borderColor:'red',
        borderWidth:4

      } 
    
    }
 )
 export default Internal;
