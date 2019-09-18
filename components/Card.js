import React from 'react';
import {View, StyleSheet} from 'react-native';


export default function Card(props) {

    const {style, children} = props

    return (
        <View style={{...estilos.inputContainer, ...style}}>
            {children}
        </View>
    )
}


const estilos = StyleSheet.create({
    inputContainer : {
        padding : 20,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor : '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 6.51,
        elevation: 5,
        borderRadius : 10,
    }
})