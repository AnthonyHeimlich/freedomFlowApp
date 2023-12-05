import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import "../../src/utils/i18n"
import {useTranslation} from "react-i18next";

const home = () => {
    const {t, i18n} = useTranslation()
    return(
        <View style={styles.container}>
            <Text style={{width:"100%", textAlign:"center", color:"#fff"}}>{t("home")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});

export default home;