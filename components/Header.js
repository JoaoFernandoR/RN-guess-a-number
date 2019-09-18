import React from 'react';
import {Text, View, StyleSheet}from 'react-native'


export default function Header() {
    return(
    <View style={estilos.header}>
        <Text style={estilos.headerText}>
          Guess a Number
        </Text>
    </View>
    )
}


const estilos = StyleSheet.create({
    header : {
        height : 90,
        width : '100%',
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor : '#EA7773',
        marginTop : 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        marginBottom : 20
    },
    headerText : {
        color : '#2B2B52',
        fontSize : 20,
        fontFamily : 'chilanka-regular'
    }
})