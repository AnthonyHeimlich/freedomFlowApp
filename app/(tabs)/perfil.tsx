import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const perfil = () => {
    return(
        <View style={styles.container}>
            <Text style={{width:"100%", textAlign:"center", color:"#fff"}}>Perfil</Text>
        </View>
    );
};

export default perfil

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});