import React, { useState } from "react";
import { View, Button, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { serviceLoginMethod } from "../../service/UserService";
import { LinearGradient } from "expo-linear-gradient";
import { userLogged } from "../../service/UserService";
import colors from '../../color'

export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertEmpty, setAlertEmpty] = useState('');

    const login = () => {
        if(username === "" || password === ""){
            setAlertEmpty("Todos os campos devem ser preenchidos");
        } else {
            serviceLoginMethod(username, password)
            .then(function(result) {
                if(result){
                    
                    if(userLogged[0].role == "ADMIN"){
                        navigation.navigate('ContractList');
                      }
                    else{
                        navigation.navigate('DirectoryClient');
                    }
                } else {
                    setAlertEmpty('Erro no Login... Usuário ou Senha Incorretos');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imagem_logo} source={require("../../img/LogoGrupoNovaesGrande.png")}></Image>
            </View>

            <View style={styles.main}>
            <Image style={styles.imagem_logo} source={require("../../img/logoStar.png")}></Image>
                    <Text style={styles.texto_login}>Faça login no nosso App</Text>

                    <TextInput
                        style={styles.input_login}
                        placeholder="Email"
                        onChangeText={text => setUsername(text)}
                    ></TextInput>

                    <TextInput
                        style={styles.input_login}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    ></TextInput>

                    <Text>{alertEmpty}</Text>
                    <TouchableOpacity style={styles.btn_login} onPress={async() => login()}>
                        <Text style={styles.text_entrar}>Entrar</Text>
                    </TouchableOpacity>

            </View>
        </View>
    );
}
