 import {View,Text,Button} from 'react-native';
  const Login=(props)=>{
    const name='shreya';
    const age=34
    return(
         
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Login Page</Text>
            <Button title="go to home " onPress={()=>props.navigation.navigate("Home",{name,age})}></Button>
        </View>
    )
}
export default Login;