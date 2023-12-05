import{View,Text,StyleSheet, Image, Button} from "react-native"
import "../src/utils/i18n"


export default function App(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>aaa</Text>
            <Button title={"Vamos para os conquistas"} onPress={rota()} style={styles.button}></Button>
        </View>

    )
}
function rota() {
    console.log("fomos para o marco")
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#282829",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:"#a6a6a6",
        paddingLeft:10,
        paddingRight:10,
    },
    button:{
        minWidth:2000,
        minHeight:200
    }

})