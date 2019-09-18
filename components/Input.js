import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


export default function Card(props) {

    return (
        <TextInput {...props}  style={{...estilos.input, ...props.style}} blurOnSubmit>
            {props.children}
        </TextInput>
    )
}


const estilos = StyleSheet.create({
    input : {
        height : 30,
        borderBottomColor : '#c1c1c1',
        borderBottomWidth : 1,
        textAlign : 'center',
        marginVertical : 10
    }
})