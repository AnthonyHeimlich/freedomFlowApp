import {Redirect} from "expo-router";
import {useFonts} from 'expo-font'
import React, {useCallback, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {Text, View} from "react-native";

SplashScreen.preventAutoHideAsync();
const StartPage = () => {
    const [fontsLoaded] = useFonts({
        Baloo: require('../src/assets/fonts/Baloo2-Regular.ttf'),
        BalooBold: require('../src/assets/fonts/Baloo2-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    if (onLayoutRootView){
        return <Redirect href="/perfil" />
    }
};

export default StartPage;