import {View,Text,Button} from 'react-native';
const App2=()=>{
    const saveApiData= async()=>{
        const data={
            id:5,
            name:"harry",
            age:45
        }
        const url='http://192.168.1.8:3000/users';
        let result=await fetch(url,{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
result= await result.json();
alert(result)
    }
    
    return(
        <View>
            <Text>Post api call</Text>
            <Button title='Save Data'  onPress={saveApiData}></Button>
        </View>
    )
}
export default App2;