import { View, Text, FlatList, StyleSheet } from 'react-native';
const AdvanceList = () => {
    const users = [
        {
            id: 1,
            name: 'Amma',
            email: 'abc@gmail.com',
        },
        {
            id: 2,
            name: 'Shreya',
            email: 'ghy@gmail.com'
        },
        {
            id: 3,
            name: 'Abhishek',
            email: 'abhi@gmail.com',
        },
        {
            id: 4,
            name: 'rahul',
            email: 'ra9@gmail.com',
        },
        {
            id: 5,
            name: 'lovely',
            email: 'lov@gmail.com'
        }

    ]
    return (
        <View>
            <Text style={{fontSize:30,color:'white'}}>here flatlist uses loops and props to display the data</Text>
            <FlatList
                data={users}
                renderItem={({item})=><UserData item={item}/>}
                />
                </View>

    )
}
const UserData= (props)=>{
    const item=props.item
    return(
        <View style={styles.box}>
                    <Text style={styles.textbox}>{item.name}</Text>
                    <Text style={styles.textbox}>{item.email}</Text>
                </View>
    )
}
const styles = StyleSheet.create({
    textbox: {
        fontSize: 25,
        color: 'pink',
        flex: 1,
        margin: 2,
        backgroundColor:'orange'
    },
    box:{
        fontSize:30,
        color:'white',
        flexDirection:'row',
        borderColor:'black',
        borderWidth:2
    }
})
export default AdvanceList;