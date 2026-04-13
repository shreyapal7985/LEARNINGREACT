import { View,Text,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack=createNativeStackNavigator();
const App2=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>

        </NavigationContainer>
    )
}
const Home=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Home Screen</Text>
            
        </View>
    )
}
const Login=(props)=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Login Page</Text>
            <Button title="go to home " onPress={()=>props.navigation.navigate("Home")}></Button>
        </View>
    )
}
export default App2;