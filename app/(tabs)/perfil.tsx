import {View, StyleSheet, } from 'react-native';
import React, {useState} from 'react';
import { Input, Button, Text} from "react-native-elements";
import {useFonts} from 'expo-font'
import {Link} from "expo-router";

const perfil = () => {
    const [fontsLoaded] = useFonts({
        Baloo: require('../../src/assets/fonts/Baloo2-Regular.ttf'),
        BalooBold: require('../../src/assets/fonts/Baloo2-Bold.ttf'),
    })


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return(
        <View style={styles.container}>

            <Text style={styles.loginTitle}>Acesse sua conta</Text>
            <Input
                label={"Email"}
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

                title={"Acessar"}
                buttonStyle={styles.button}
                containerStyle={{width: '90%', backgroundColor: "#3CA6A6", borderRadius:8, marginTop:20}}
                titleStyle={{fontSize:15, fontFamily:'Baloo'}}
            />
            <Text style={styles.desc}>Ou acesse com:</Text>
            <Text style={styles.desc}>Não possuí uma conta?<Link style={{color:'#3CA6A6'}} href="/conquistas">  Criar</Link></Text>

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