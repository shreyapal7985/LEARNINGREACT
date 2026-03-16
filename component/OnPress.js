import {Text, View, Button, Alert,} from 'react-native';

const press2 = (name) => {
 alert("runs immediately when finger touches the button" +name)
}; 

function warn(){
        alert( 'u r loggin successfully');
    } ;

const Press = () => {
    return(
        <View>
            <Button title='press me 1' color={'green'} onPress={warn}></Button>
            <Button title='touch me 2' color={'orange'} onPress={() => press2("garima")}></Button>// used for parameter
        </View>
    );
};

export default Press;