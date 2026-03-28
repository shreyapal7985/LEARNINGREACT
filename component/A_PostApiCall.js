//fetch ke andr url ke alawa jo dusri value hoti h wo object ke format me hoti h 
//jo humlog ne headers define kiya h wo btata h jo data API ke andr jaa rha h Ur jo Return kr rha h wo kis format me hoga; it's like metadata
//body me aise direct dat nhi likh skte h . phele uska type strigyfy define krna pdta h
import React from 'react';
import { View,Text,Button} from 'react-native';
const App2 = ()=>{
    const saveApiData= async ()=>{
        
        const data={
            id:6,
            name:"tony",
            age:34
        }
const url='http://10.239.150.152:3000/users';
let result=await fetch(url,{
    method:"post",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
})
result=await result.json();
console.warn(result);
    }
    return(
        <View style={{marginTop:40,alignItems:'center',}}>
<Text style={{fontSize:25,color:'white'}}>A POST API CALL with Static Data</Text>
<Button title='Save Data' onPress={saveApiData}></Button>
        </View>
    )
}
export default App2;