import {View, Text, Button, StyleSheet} from 'react-native';
const List1 = ()=>{
    const users=[
        {
            id:1,
            name:'Amma',
        },
        {
            id:2,
            name:'Shreya'
        },
        {
            id:3,
            name:'Abhishek',
        }

    ]
    return(
        <View style={{borderColor:'brown', borderWidth:4}}>
            <Text style={{fontSize:22, color:'white'}}>List with map function or Custom list</Text>
            {
            users.map((item)=><Text style={styles.text}>{item.name}</Text>)
            }
            
        </View>
    )
}
 const styles=StyleSheet.create({

 
    text:{
        color:'white',
        backgroundColor:'blue',
    

    }
 })
export default List1;