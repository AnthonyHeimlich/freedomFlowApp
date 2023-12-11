import {View, Text, Button, StyleSheet, Touchable, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CircularSlider from 'react-native-circular-slider'
import "../../src/utils/i18n"
import {useTranslation} from "react-i18next";
import {Link} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import PhrasesApi from '../services/phrasesApi'

const home = () => {

    const [phrase, setPhrase] = useState(null)
    const [author   , setAuthor] = useState(null)

    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [customInterval, setCustomInterval] = useState<NodeJS.Timer>()

    const startTimer = () =>{
        if(minutes === 0 && hours === 0){
            setCustomInterval(
                setInterval(() => {
                    changeTime()
                },60)
            )
        }
    }
    const restart = () => {
        setMinutes(0)
        setHours(0)
        startTimer()
    }
    const changeTime = () => {
        setMinutes((prevState) =>{
            if (prevState + 1 == 60){
                setHours((prevState) =>{
                    if (prevState + 1 == 2){
                        setDays((prevState) =>{
                            return prevState + 1
                        })
                        setHours(0)
                        setMinutes(0)
                        restart()
                    }
                    return prevState + 1
                })
                return 0
            }
            return prevState + 1
        })
    }

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


    const [days, setDays] = useState(0)
    const colorWheel = (days) => {
        if(days >= 3 && days < 5){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#F23030", alignItems:"center", justifyContent:"center"}
        } else if(days >= 5 && days < 10){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#FFCE54", alignItems:"center", justifyContent:"center"}
        } else if(days >= 10 && days < 15){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#A0D568", alignItems:"center", justifyContent:"center"}
        } else if(days >=15 && days < 20){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#4FC1E8", alignItems:"center", justifyContent:"center"}
        } else if(days >=20 && days < 30){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#112A4A", alignItems:"center", justifyContent:"center"}
        } else if(days >= 30){
            return{minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#512787", alignItems:"center", justifyContent:"center"}
        }
        else{return {minWidth:250, borderWidth:5, borderColor:"#F2E3D5", minHeight:250, borderRadius:999, backgroundColor:"#FF0000", alignItems:"center", justifyContent:"center"}}

    }



    useEffect(() => {
        phrasesApi()
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.notificationContainer}>
                <Link href='../notificacaoTab'><Ionicons style={{width:"100%", height:"100%", fontSize:36, color:"#F2E3D5"}} name='notifications-outline'></Ionicons></Link>
            </View>
            <View style={styles.statContainer}>
                <Text style={{fontFamily:'Baloo',color:"#F2E3D5", paddingBottom:20, fontSize:25}}>{hours < 10 ? '0' + hours : minutes}:{minutes < 10 ? '0' + minutes : minutes}</Text>
                <TouchableOpacity onPress={startTimer} style={colorWheel(days)}>
                    <View style={{alignItems:"center", justifyContent:"space-between"}}>
                        <Text style={styles.confirm}>CONFIRMAR</Text>
                        <Text style={styles.day}>{days} Dias</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={restart} style={styles.restartButton}>
                    <Image style={{width:"50%", height:"50%"}} source={require('../../src/assets/images/refresh-arrow.png')}/>
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
    restartButton:{
        width:50,
        height:50,
        backgroundColor:"#F2E3D5",
        borderRadius:20,
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        right:30,
        bottom:30,
    },

    phrase:{
        fontFamily:'Baloo',
        color:"#F2E3D5",
        fontSize:18,
    },
    author:{
        fontFamily:'Baloo',
        minWidth:"100%",
        color:"#F2E3D5",
        textAlign:"right",
    },
    confirm:{
        color:"#F2E3D5",
        fontFamily:'Baloo',
        fontSize:25,
        paddingTop:30,
        paddingBottom:20
    },

    day:{
        color:"#F2E3D5",
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
        paddingBottom:60,
    },

});

export default home;