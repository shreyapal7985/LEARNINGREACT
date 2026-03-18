//on 5 line we create the flatList with the help of declaring array of Object
//on 4 line we create the flat list with the help noraml array
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
const Narray=["sheya","sam"]
const List = ()=>{
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
        <View style={{borderColor:'green', borderWidth:4}}>
            <Text style={{fontSize:22, color:'white'}}>List with Flat list Componenet</Text>
            <Text style={{fontSize:22, color:'white'}}>{}</Text>
            <FlatList
                data={users}
                renderItem={({item})=><Text style={styles.text}>{item.name}</Text>}
                keyExtractor={item=>item.id}
                
            />
        </View>
    )
}
 const styles=StyleSheet.create({

 
    text:{
        color:'white',
        backgroundColor:'blue',
    

    }
 })
export default List;