import {
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    Platform,
    Pressable,
} from 'react-native';
import { Input, Button, Text} from "react-native-elements";
import {Link} from "expo-router";
import React, {useState} from 'react';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const cadastro = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [username, setUsername] = useState(null)

    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [errorFirstName, setErrorFirstName] = useState(null)
    const [errorLastName, setErrorLastName] = useState(null)
    const [errorBirthDate, setErrorBirthDate] = useState(null)
    const [errorUsername, setErrorUsername] = useState(null)

    const validar = () =>{
        let error = false
        setErrorEmail(null)
        setErrorPassword(null)
        setErrorConfirmPassword(null)
        setErrorFirstName(null)
        setErrorLastName(null)
        setErrorBirthDate(null)
        setErrorUsername(null)

        if(email == null){
            setErrorEmail("Insira seu email corretamente")
            error = true
        }
        if(password == null){
            setErrorPassword("Insira a senha")
            error = true
        }
        if(confirmPassword == null){
            setErrorConfirmPassword("Confirme a senha")
            error = true
        }
        if(firstName == null){
            setErrorFirstName("Insira seu nome")
            error = true
        }
        if(lastName == null){
            setErrorLastName("Insira seu último nome")
            error = true
        }
        if(birthDate == null){
            setErrorBirthDate("Insira sua data de nascimento")
            error = true
        }
        if(username == null){
            setErrorUsername("Insira seu nome de usuário")
            error = true
        }

        return !error
    }

    const cadastrar = () => {
        if(validar()){
            console.log(email)
            console.log(password)
        }
    }

    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
    }
    const onChangeDate = ({type}, selectedDate) => {
        if (type == 'set'){
            const currentDate = selectedDate
            setDate(currentDate)

            if (Platform.OS === "android"){
                toggleDatepicker()
                setBirthDate(currentDate.toDateString())
            }
        } else{
            toggleDatepicker()
        }
    }
    const confirmIOSDate = () => {
        setBirthDate(date.toDateString())
        toggleDatepicker()
    }


    return(
        <SafeAreaView>
            <StatusBar hidden={true}/>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.registerTitle}>Crie sua conta</Text>
                <Input
                    label={"Email"}
                    autoComplete={"email"}
                    cursorColor={"#012E40"}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    style={styles.input}
                    labelStyle={styles.label}
                    selectionColor={'green'}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setEmail(value)}
                    errorMessage={errorEmail}
                />
                <Input
                    label={"Senha"}
                    cursorColor={"#012E40"}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    style={styles.input}
                    labelStyle={styles.label}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setPassword(value)}
                    errorMessage={errorPassword}
                />
                <Input
                    label={"Confirme a Senha"}
                    cursorColor={"#012E40"}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    style={styles.input}
                    labelStyle={styles.label}
                    containerStyle={{width:'95%', marginTop:0}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    rightIconContainerStyle={styles.icon}
                    onChangeText={value => setConfirmPassword(value)}
                    errorMessage={errorConfirmPassword}
                />
                <View style={{flexDirection:"row", width:"95%", justifyContent:"space-between"}}>
                    <Input
                        label={"Primeiro Nome"}
                        autoComplete={"name"}
                        cursorColor={"#012E40"}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setFirstName(value)}
                        errorMessage={errorFirstName}
                    />
                    <Input
                        label={"Último Nome"}
                        autoComplete={"family-name"}
                        cursorColor={"#012E40"}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setLastName(value)}
                        errorMessage={errorLastName}
                    />
                </View>
                <View style={{flexDirection:"row", width:"95%", justifyContent:"space-between"}}>

                    {showPicker &&(
                        <RNDateTimePicker
                            minimumDate={new Date('1920-1-1')}
                            maximumDate={new Date()}
                            mode={"date"}
                            display={"spinner"}
                            value={date}
                            onChange={onChangeDate}
                            style={{height:120, marginTop:-10}}
                        />
                    )}

                    {showPicker && Platform.OS === "ios" && (
                        <View style={{flexDirection:"row", justifyContent:"space-around", position:"absolute", width:"100%", zIndex:1}}>
                            <Button
                                TouchableComponent={TouchableWithoutFeedback}
                                onPress={toggleDatepicker}
                                title={"Cancelar"}
                                buttonStyle={styles.button}
                                containerStyle={{width: '30%', backgroundColor: "#F23030", borderRadius:8, marginTop:20}}
                                titleStyle={{fontSize:15, fontFamily:'Baloo'}}
                            />
                            <Button
                                TouchableComponent={TouchableWithoutFeedback}
                                onPress={confirmIOSDate}
                                title={"Confirmar"}
                                buttonStyle={styles.button}
                                containerStyle={{width: '30%', backgroundColor: "#3CA6A6", borderRadius:8, marginTop:20}}
                                titleStyle={{fontSize:15, fontFamily:'Baloo'}}
                            />
                        </View>
                    )}

                    <Pressable onPress={toggleDatepicker} style={{width:'50%'}}>
                        <Input
                            label={"Data de Nascimento"}
                            cursorColor={"#012E40"}
                            autoCapitalize={"none"}
                            style={styles.inputSmall}
                            labelStyle={styles.label}
                            containerStyle={{width:'100%', marginTop:0}}
                            inputContainerStyle={{borderBottomWidth:0}}
                            rightIconContainerStyle={styles.icon}
                            errorMessage={errorBirthDate}

                            value={birthDate}
                            editable={false}
                            onPressIn={toggleDatepicker}
                        />
                    </Pressable>
                    <Input
                        label={"Nome de usuário"}
                        autoComplete={"username"}
                        cursorColor={"#012E40"}
                        autoCapitalize={"none"}
                        style={styles.inputSmall}
                        labelStyle={styles.label}
                        containerStyle={{width:'50%', marginTop:0}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        rightIconContainerStyle={styles.icon}
                        onChangeText={value => setUsername(value)}
                        errorMessage={errorUsername}
                    />
                </View>
                <Button
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => cadastrar()}
                    title={"Criar"}
                    buttonStyle={styles.button}
                    containerStyle={{width: '90%', backgroundColor: "#3CA6A6", borderRadius:8, marginTop:20}}
                    titleStyle={{fontSize:15, fontFamily:'Baloo'}}
                />
                <Text style={styles.desc}>Ou crie com:</Text>
                <Button TouchableComponent={TouchableWithoutFeedback} title={"Google"} buttonStyle={{backgroundColor:"#3CA6A6"}} containerStyle={{marginTop:10}}></Button>
                <Text style={styles.desc}>Já possui uma conta?<Link style={{color:'#3CA6A6'}} href="/perfil">  Acesse</Link></Text>
                <View style={{height:10}}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default cadastro;

const styles = StyleSheet.create({
    registerTitle:{
        marginTop:70,
        color:"#F2E3D5",
        fontWeight:"normal",
        fontSize:25,
        width:"90%",
        marginBottom:25,
        fontFamily:'Baloo',
    },
    desc:{
        color:"#F2E3D5",
        fontWeight:"normal",
        fontSize:15,
        marginTop:25,
        fontFamily:'Baloo',
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",

    },
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        width:"100%",
        backgroundColor:"#024959",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        height:40,
        backgroundColor:"#F2E3D5",
        paddingRight:5,
        color:"#012E40",
        borderRadius:8,
        paddingLeft:10,

    },
    inputSmall:{
        height:40,
        width:"50%",
        backgroundColor:"#F2E3D5",
        paddingRight:5,
        color:"#012E40",
        borderRadius:8,
        paddingLeft:10,

    },
    button:{
        height:40,
        backgroundColor:"#transparent",
    },
    label:{
        color:"#3CA6A6",
        fontWeight:"normal",
        fontSize:12,
        paddingBottom:5,
        paddingLeft:10,
        fontStyle:"normal",
        fontFamily:'Baloo'
    },
    icon:{
        position:"absolute",
        right:5,
    }
});
