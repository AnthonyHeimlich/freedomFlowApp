import {StyleSheet, Text, View} from "react-native";
import React from "react";

const notificacao = () => {
    return(
        <View style={styles.container}>
            <Text style={{width:"100%", textAlign:"center", color:"#fff"}}>Notificacao</Text>
        </View>
    );
};

export default notificacao;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});