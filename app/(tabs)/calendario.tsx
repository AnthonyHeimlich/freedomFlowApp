import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const calendario = () => {
    return(
        <View style={styles.container}>
            <Text style={{width:"100%", textAlign:"center", color:"#fff"}}>Calendario</Text>
        </View>
    );
};

export default calendario;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});