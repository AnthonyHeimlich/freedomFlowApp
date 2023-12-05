import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const beneficios = () => {
    return(
        <View style={styles.container}>
            <Text style={{width:"100%", textAlign:"center", color:"#fff"}}>Beneficios</Text>
        </View>
    );
};

export default beneficios;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});