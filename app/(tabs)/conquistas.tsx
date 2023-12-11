import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CircularSlider from 'react-native-circular-slider'

const conquistas = () => {
    return(
        <View style={styles.container}>
            <CircularSlider
                startAngle={10}
                angleLength={90}
                segments={5}
                strokeWidth={40}
                radius={145}
            />
        </View>
    );
};

export default conquistas;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },

});