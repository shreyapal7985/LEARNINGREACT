//sectionlist is used when we have nested list data
//inside the users array we cant change the name of data
import { View, Text, StyleSheet,SectionList } from 'react-native';
const ListSection = () => {
    const users = [
        {
            id: 1,
            name: 'Amma',
            data:["php", "react js","css","python"]
        },
        {
            id: 2,
            name: 'Shreya',
            data:["php", "react js","css","python"]        },
        {
            id: 3,
            name: 'Abhishek',
            data:["php", "react js","css","python"],
        },
        {
            id: 4,
            name: 'rahul',
           data:["php", "react js","css","python"],
        },
        {
            id: 5,
            name: 'lovely',
           data:["php", "react js","css","python"]
        }

    ]
    return (
        <View>
            <Text style={{fontSize:30,color:'white'}}>Section List in React native</Text>
            <SectionList 
                sections={users}
                renderItem={({item})=><Text style={{fontSize:25,color:'white', marginLeft:20}}>{item}</Text>}
                renderSectionHeader={({section:{name}}) => (
                    <Text style={{fontSize:30, color:'red'}}>{name}</Text>
                )}
            />
                </View>

    )
}
export default ListSection;
