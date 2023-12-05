import {Tabs} from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default () => {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:'#012E40',
            tabBarInactiveTintColor:'#012E40',
            tabBarShowLabel:false,
            tabBarStyle: {
            backgroundColor: '#F2E3D5',
                height:"9%",
                borderTopLeftRadius:8,
                borderTopRightRadius:8,
                position:"absolute",
                justifyContent:"center"}
            ,}}
        >
            <Tabs.Screen name="conquistas" options={{headerShown: false, tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="ribbon" size={size} color={color}/>
                    }
                    return <Ionicons name="ribbon-outline" size={size} color={color}/>
                }
            }}/>
            <Tabs.Screen name="calendario" options={{headerShown: false, tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="calendar" size={size} color={color}/>
                    }
                    return <Ionicons name="calendar-outline" size={size} color={color}/>
                }
            }}/>
            <Tabs.Screen name="home" options={{headerShown: false, tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={color}/>
                    }
                    return <Ionicons name="home-outline" size={size} color={color}/>
                }
            }}/>
            <Tabs.Screen name="beneficios" options={{headerShown: false, tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="heart" size={size} color={color}/>
                    }
                    return <Ionicons name="heart-outline" size={size} color={color}/>
                }
            }}/>
            <Tabs.Screen name="perfil" options={{headerShown: false, tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="person" size={size} color={color}/>
                    }
                    return <Ionicons name="person-outline" size={size} color={color}/>
                }
            }}/>
        </Tabs>
    );
};

const styles = StyleSheet.create({
    teste:{

    }

})


