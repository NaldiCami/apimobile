import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Signin () {
    return (
        <View style = {styles.container}>
            <Animatable.View animation = "fadeInLeft" deLay = {500} style = {styles.containerHeader}>
                <Text style = {styles.message}> Tela Login </Text>
            </Animatable.View>
            
            <Animatable.View animation = "fadeInUp" style = {styles.container}>
                <Text style = {styles.title}> Email </Text>
                <Text Input
                    placeholder = "Digite um email..."
                    style = {styles.input}
                />

                <Text style = {styles.title}> Senha</Text>
                <TextInput
                    placeholder = "sua senha "
                    style = {styles.input}
                />

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonRegister}>
                    <Text style = {styles.registerText}>Não possui uma conta?</Text>
                </TouchableOpacity>

            </Animatable.View> 

        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }



})