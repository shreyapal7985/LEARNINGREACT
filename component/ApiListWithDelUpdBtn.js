import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Modal, TextInput } from "react-native";
const App2 = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    {/* GET API FUNCTION*/ }
    const getApi = async () => {
        const url = "http://10.239.150.152:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }

    {/* FUNCTION FOR DELETING THE DATA*/ }
    const deleteUser = async (id) => {
        const url = "http://10.239.150.152:3000/users";
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            alert("user dlt")
            getApi()
        }
    }

    {/*FUNCTION FOR UPDATING THE API DATA*/ }
    const updateData = (data) => {
        setShowModal(true)
        setSelectedUser(data)
    }

    {/* USE-EFFECT*/ }
    useEffect(() => {
        getApi()
    }, [])

    return (
        <View style={styles.main}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1 }}><Text>Id</Text></View>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 1 }}><Text>Age</Text></View>
                <View style={{ flex: 1.5 }}><Text>Operations</Text></View>

            </View>
            {
                data.length ? data.map((item) => <View key={item.id} style={styles.dataWrapper}>
                    <View style={{ flex: 1 }}><Text>{item.id}</Text></View>
                    <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                    <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                    <View><Button title="Update" onPress={() => updateData(item)}></Button></View>
                    <View><Button title="Delete" onPress={() => deleteUser(item.id)}></Button></View>
                </View>) : null
            }
            
            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getApi={getApi} />
            </Modal>
        </View>
    )
}

{/*COMPONENT FOR MODAL DATA*/}
const UserModal = (props) => {
    {/*alert(JSON.stringify(props.selectedUser));*/}
    const [name,setName]=useState(undefined);
    const [age,setAge]=useState(undefined);
    useEffect(()=>{
        if(props.selectedUser){
            setName(props.selectedUser.name);
            setAge(props.selectedUser.age.toString())
        }

    },[props.selectedUser])

    {/*function for update user data in api*/}
    const updateUsers=async() => {
        const id=props.selectedUser.id;
        const url="http://10.239.150.152:3000/users";
        let result=await fetch(`${url}/${id}`,{
            method:'Put',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,age})
        });
        result=await result.json();
        if(result){
            alert("data updated");
            props.getApi();
            props.setShowModal(false)
        }
    }

    return (
        <View style={styles.modalMain}>
            <View style={styles.modalView}>
                <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)}></TextInput>
                <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)}></TextInput>
                <View style={{marginBottom:10}}>
                <Button title='Update' onPress={updateUsers}/></View>
                <Button title='close' onPress={() => props.setShowModal(false)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            marginTop: 40
        },
        dataWrapper: {

            flexDirection: 'row',
            justifyContent: "space-around",
            backgroundColor: 'orange',
            margin: 5
        },
        modalMain: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center'

        },
        modalView: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 20,
            shadowColor: 'red',
            shadowOpacity: 0.75,
            elevation: 30

        },
        input:{
            borderColor:'sky-blue',
            borderWidth:4,
            width:300,
            marginBottom:10,
            color:'black'
        }
    }
)
export default App2;