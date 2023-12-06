import {View, StyleSheet, ScrollView, TouchableWithoutFeedback, SafeAreaView, StatusBar, Platform,} from 'react-native';
import { Input, Button, Text} from "react-native-elements";
import {Link} from "expo-router";
import React, {useState} from 'react';

const cadastro = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [username, setUsername] = useState(null)

    const cadastrar = () => {
        console.log(email)
        console.log(password)
    }

    return(
        <SafeAreaView>
            <StatusBar hidden={true}/>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.registerTitle}>Crie sua conta</Text>
                <Input
                    label={"Email"}
                    keyboardType={"email-address"}
                    style={styles.input}
                    labelStyle={styles.label}
                    selectionColor={'green'}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setEmail(value)}
                />
                <Input
                    label={"Senha"}
                    secureTextEntry={true}
                    style={styles.input}
                    labelStyle={styles.label}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setPassword(value)}
                />
                <Input
                    label={"Confirme a Senha"}
                    secureTextEntry={true}
                    style={styles.input}
                    labelStyle={styles.label}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setConfirmPassword(value)}
                />
                <View style={{flexDirection:"row", width:"95%", justifyContent:"space-between"}}>
                    <Input
                        label={"Primeiro Nome"}
                        secureTextEntry={true}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setFirstName(value)}
                    />
                    <Input
                        label={"Último Nome"}
                        secureTextEntry={true}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setLastName(value)}
                    />
                </View>
                <View style={{flexDirection:"row", width:"95%", justifyContent:"space-between"}}>
                    <Input
                        label={"Data de Nascimento"}
                        secureTextEntry={true}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setBirthDate(value)}
                    />
                    <Input
                        label={"Nome de usuário"}
                        secureTextEntry={true}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setUsername(value)}
                    />
                </View>
                <Button
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => cadastrar()}
                    title={"Criar"}
                    buttonStyle={styles.button}
                    containerStyle={{width: '90%', backgroundColor: "#3CA6A6", borderRadius:8, marginTop:20}}
                    titleStyle={{fontSize:15, fontFamily:'Baloo'}}
                />
                <Text style={styles.desc}>Ou crie com:</Text>
                <Button TouchableComponent={TouchableWithoutFeedback} title={"Google"} buttonStyle={{backgroundColor:"#3CA6A6"}} containerStyle={{marginTop:10}}></Button>
                <Text style={styles.desc}>Já possui uma conta?<Link style={{color:'#3CA6A6'}} href="/perfil">  Acesse</Link></Text>
                <View style={{height:10}}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default cadastro;

const styles = StyleSheet.create({
    registerTitle:{
        marginTop:70,
        color:"#F2E3D5",
        fontWeight:"normal",
        fontSize:25,
        width:"90%",
        marginBottom:25,
        fontFamily:'Baloo',
    },
    desc:{
        color:"#F2E3D5",
        fontWeight:"normal",
        fontSize:15,
        marginTop:25,
        fontFamily:'Baloo',
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",

    },
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        width:"100%",
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        height:40,
        backgroundColor:"#F2E3D5",
        paddingRight:5,
        color:"#012E40",
        borderRadius:8,
        paddingLeft:10,

    },
    inputSmall:{
        height:40,
        width:"50%",
        backgroundColor:"#F2E3D5",
        paddingRight:5,
        color:"#012E40",
        borderRadius:8,
        paddingLeft:10,

    },
    button:{
        height:40,
        backgroundColor:"#transparent",
    },
    label:{
        color:"#3CA6A6",
        fontWeight:"normal",
        fontSize:12,
        paddingBottom:5,
        paddingLeft:10,
        fontStyle:"normal",
        fontFamily:'Baloo'
    },
    icon:{
        position:"absolute",
        right:5,
    }
});
