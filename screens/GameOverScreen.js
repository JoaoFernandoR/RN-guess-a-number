import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native'


export default function GameOverScreen(props) {

    const {guessRounds, userNumber, gameRestartHandler} = props

    return (
        <View style={estilos.container}>
            <Text>
            O computador acertou em {guessRounds} tentativas
            </Text>
            <Text>
            O número era {userNumber}
            </Text>
            <TouchableHighlight style={[estilos.button, {backgroundColor : '#FFF222'}]} onPress={gameRestartHandler}>
                <Text> New Game !</Text>
            </TouchableHighlight>
        </View>
    )
}


const estilos = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        padding : 12,
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 18,
    },
})