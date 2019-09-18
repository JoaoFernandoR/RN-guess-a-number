import React, {useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Card from '../components/Card'

    generateNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max-min) + min)
        if (rndNumber === exclude)
            return generateNumberBetween(min, max, exclude)
        else 
        return rndNumber   
    }

export default function GameScreen(props) {

    const {userNumber, onGameOver} = props
        
    const [currentGuess, setCurrentGuess] = useState(generateNumberBetween(1, 100, userNumber))
    const [guessRounds, setGuessRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds)
        }
    }, [currentGuess, userNumber, onGameOver])

    handleGuess = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction ==='higher' && currentGuess > userNumber)){
            Alert.alert("Don't lie", "you are cheating", [{text : 'Sorry', style: 'cancel'}])
        return 
        }

        if(direction === 'lower'){
            // Usando useRef temos um objeto que tem .current como uma propriedade
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateNumberBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setGuessRounds(guessRounds + 1)
    }
         

    return (
        <View style={estilos.gameView}>
            <Text style={{fontFamily : 'chilanka-regular'}}> Oponent's Guess </Text>
            <View style={estilos.number}>
                <Text style={{color : '#EA7773', fontSize : 22}}> {currentGuess} </Text>
            </View>
            <Card style={estilos.cardView}>
                <TouchableOpacity style={[estilos.button, {backgroundColor : '#FFF222'}]} onPress={() => handleGuess('lower')}>
                    <Text> Lower</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[estilos.button, {backgroundColor : '#EA7773'}]} onPress={() => handleGuess('higher')}>
                    <Text> Higher </Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}


const estilos = StyleSheet.create({ 
    gameView : {
        flex : 1, 
        alignItems: 'center',
        marginTop : 10
    },
    cardView : {
        marginTop : 10,
        flexDirection : 'row',
        width : 300,
        maxWidth : '80%',
        justifyContent : 'space-evenly'
    },
    button : {
        padding : 12,
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 18,
    },
    number : {
        padding : 8,
        borderRadius :100,
        borderWidth : 1,
        backgroundColor : "#2B2B52",
        marginVertical : 10
    }
})
