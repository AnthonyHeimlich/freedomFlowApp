import {View, Text, Button, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import "../../src/utils/i18n"
import {useTranslation} from "react-i18next";
import {Link} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import PhrasesApi from '../services/phrasesApi'

const home = () => {

    const [phrase, setPhrase] = useState(null)
    const [author   , setAuthor] = useState(null)

    const phrasesApi = async () =>{
        try{
            const response = await PhrasesApi.get(`/quotes/change`)
            if(!(response.data[0].q === 'Too many requests. Obtain an auth key for unlimited access.'))
            setPhrase(response.data[0].q)
            setAuthor(response.data[0].a)
        }catch(error){
            console.log("ERRO API" + error)
        }
    }

    const timerCount = (day) =>{
        setDays(day)
    }
    const statClick = () => {

    }


    const [days, setDays] = useState(30)
    const colorWheel = (days) => {
        if(days >= 3 && days < 5){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#F23030", alignItems:"center", justifyContent:"center"}
        } else if(days >= 5 && days < 10){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#FFCE54", alignItems:"center", justifyContent:"center"}
        } else if(days >= 10 && days < 15){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#A0D568", alignItems:"center", justifyContent:"center"}
        } else if(days >=15 && days < 20){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#4FC1E8", alignItems:"center", justifyContent:"center"}
        } else if(days >=20 && days < 30){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#112A4A", alignItems:"center", justifyContent:"center"}
        } else if(days >= 30){
            return{minWidth:250, borderWidth:5, borderColor:"#fff", minHeight:250, borderRadius:999, backgroundColor:"#512787", alignItems:"center", justifyContent:"center"}
        }
        else{return {minWidth:250, minHeight:250, borderRadius:999, backgroundColor:"#FF0000"}}

    }

    useEffect(() => {
        phrasesApi()
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.notificationContainer}>
                <Link href='../notificacaoTab'><Ionicons style={{width:"100%", height:"100%", fontSize:36, color:"#fff"}} name='notifications-outline'></Ionicons></Link>
            </View>
            <View style={styles.statContainer}>
                <TouchableOpacity onPress={statClick} style={colorWheel(days)}>
                    <View style={{alignItems:"center", justifyContent:"space-between"}}>
                        <Text style={styles.confirm}>CONFIRMAR</Text>
                        <Text style={styles.day}>23 Dias</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.phraseContainer}>
                <Text style={styles.phrase}>{phrase}</Text>
                <Text style={styles.author}>- {author}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    phrase:{
        fontFamily:'Baloo',
        color:"#fff",
        fontSize:18,
    },
    author:{
        fontFamily:'Baloo',
        minWidth:"100%",
        color:"#fff",
        textAlign:"right",
    },
    confirm:{
        color:"#fff",
        fontFamily:'Baloo',
        fontSize:25,
        paddingTop:30,
        paddingBottom:20
    },

    day:{
        color:"#fff",
        fontFamily:'Baloo',
        fontSize:30,
        paddingTop:40
    },

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"space-between",
        alignItems:"center",
    },
    notificationContainer:{
        paddingRight:20,
        marginTop:40,
        maxHeight:"10%",
        width:"100%",
        justifyContent:"flex-end",
        flexDirection:"row",
    },
    statContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:"60%",
        width:"100%",

    },
    phraseContainer:{
        textAlign:"right",
        maxWidth:"90%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        minHeight:"30%",
        maxHeight:"30%",
        paddingBottom:100,
    },

});

export default home;