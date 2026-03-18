//flexWrap ki value wrap dene se agr hum flex direction row dete h agr koi box first row me nhi aa pata h to wo second row me shift ho jata h
//flex ki value 1 dene se , uss box jitni space milegi wo ussi me adjust ho jayega 
import { View, Text, StyleSheet } from 'react-native';
const Grid = () => {
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
        },
        {
            id:4,
            name:'rahul'
        },
        {
            id:5,
            name:'lovely'
        }

    ]
    return (
        <View style={{ borderColor: 'pink', borderWidth: 5 }}>
            <Text style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>Grid with dynamic data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    users.map((text)=><Text style={styles.grid}>{text.name}</Text>)

                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    grid: {
        borderColor: 'black',
        borderWidth: 3,
        color: 'white',
        backgroundColor: 'orange',
        margin: 5,
        width: 120,
        height: 120,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25
    }
})
export default Grid;