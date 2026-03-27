import {View,Text,Button,StyleSheet,} from 'react-native';
  export const Home =(props)=>{
    const {name,age}=props.route.params;{/* by using this we can directly pass the name without writing props.route.params.name for different different variables*/}
    return(
        <View style={styles.main}>
            <Text style={{fontSize:25}}>Home Screen</Text>
            <Text style={{fontSize:25}}>Name:{name}</Text>{/* ya to direct de skte by passing the Name:{props.route.params.name}*/}
            <Text style={{fontSize:25}}>Age:{age}</Text>
            
        </View>

    )
 }
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    }
})