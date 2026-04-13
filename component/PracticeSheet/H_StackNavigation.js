import { View,Text,Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack=createNativeStackNavigator();
const App2=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{//from there style can be applied to every navigation
            headerStyle:{
            backgroundColor:'grey'},
            headerTintColor:'pink',
            headerTitleStyle:{
                fontSize:40
            }
        }}>

            <Stack.Screen name='Login' component={Login} 
            options={{ //from here styles can be applied to specific element
            headerLeft:()=><Button title='left'/>,
            headerRight:()=><Header/>,
                title:'user',
                headerStyle:{
                    backgroundColor:'red'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                 fontSize:50,
                }

            }}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>

        </NavigationContainer>
    )
}
const Header=()=>{
    return(
        <TextInput placeholder="name"/>
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