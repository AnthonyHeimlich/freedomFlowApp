import {View, StyleSheet, TouchableWithoutFeedback, Touchable,} from 'react-native';
import { Input, Button, Text} from "react-native-elements";
import {Link} from "expo-router";
import React, {useEffect, useState} from 'react';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Api from '../services/api'


const perfil = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [logged, setLogged] = useState(true)
    const [infoAPI, setInfoAPI] = useState(null)

    const entrar = () => {
        console.log(email)
        console.log(password)
    }

    const emailAPI = async () =>{
        try{
            const response = await Api.get(`/accounts`)
            setInfoAPI(response.data[0].username)
        }catch(error){
            console.log("ERRO API" + error)
        }
    }

    useEffect(() => {
        emailAPI()
    }, []);
    return(
        <View style={styles.container}>
            {logged && <>
                <Text style={{color:"#fff", marginBottom:20}}>Usuário logado: {infoAPI}</Text>
                <Text style={{color:"#fff"}}>Última conquista: </Text>
            </>}



            {!logged && <>
                <Text style={styles.loginTitle}>Acesse sua conta</Text>
                <Input
                    label={"Email"}
                    autoComplete={"email"}
                    cursorColor={"#012E40"}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    style={styles.input}
                    labelStyle={styles.label}
                    selectionColor={'green'}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIcon={{type: 'ionicon', name:'mail-outline', color:'#012E40', size:20}}
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
                    rightIcon={{type: 'ionicon', name:'lock-closed-outline', color:'#012E40', size:20}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setPassword(value)}
                />
                <Button
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => entrar()}
                    title={"Acessar"}
                    buttonStyle={styles.button}
                    containerStyle={{width: '90%', backgroundColor: "#3CA6A6", borderRadius:8, marginTop:20}}
                    titleStyle={{fontSize:15, fontFamily:'Baloo'}}
                />
                <Text style={styles.desc}>Ou acesse com:</Text>
                <Button TouchableComponent={TouchableWithoutFeedback} title={"Google"} buttonStyle={{backgroundColor:"#3CA6A6"}} containerStyle={{marginTop:10}}></Button>
                <Text style={styles.desc}>Não possui uma conta?<Link style={{color:'#3CA6A6'}} href='../cadastroTab'>  Criar</Link></Text>
            </>}

        </View>
    );
};

export default perfil

const styles = StyleSheet.create({
    loginTitle:{
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
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        height:50,
        backgroundColor:"#F2E3D5",
        paddingRight:32,
        color:"#012E40",
        borderRadius:8,
        paddingLeft:10,

    },
    button:{
        height:50,
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