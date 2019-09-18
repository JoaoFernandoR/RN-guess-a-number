import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert}from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'

export default function StartGameScreen(props) {

    const [enteredValue, setEnteredValue] = useState('')
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    handleInput = textInput => {
        setEnteredValue(textInput.replace(/[^0-9]/g,''))
    }

    resetHandler = () => {
        setEnteredValue('')
        setIsConfirmed(false)
    }

    confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue)        
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert('invalid number', 'Number has to be between 1 and 99', [{text : 'Okay', style : 'cancel', onPress :resetHandler}])
        }
            
        setIsConfirmed(true)
        setSelectedValue(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    renderNumbercontainer = () => {
        if (isConfirmed) {
            return(
            <Card style={estilos.containerNumber}>
                <Text style={{fontFamily : 'chilanka-regular'}}> You selected </Text>
                <View style={estilos.number}>
                    <Text style={{color : '#EA7773', fontSize : 22}}> {selectedValue} </Text>
                </View>
                <TouchableOpacity onPress={() => props.valueScreen(selectedValue)}>
                    <Text style={[estilos.button, {backgroundColor : '#EA7773'}]}> START GAME </Text>
                </TouchableOpacity>
            </Card>
            )
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex : 1, alignItems : 'center'}}>
            <Text style={estilos.title}> Start a New Game !</Text>
            <Card style={estilos.inputContainer}>
                <Text style={{fontFamily : 'chilanka-regular'}}> Select a Number</Text>
                <Input style={estilos.input} keyboardType='number-pad' maxLength={2} value={enteredValue} onChangeText={handleInput} />
                <View style={estilos.buttonContainer}>
                    <TouchableOpacity style={[estilos.button, {backgroundColor : '#FFF222'}]} onPress={resetHandler}>
                        <Text>
                            Reset
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.button, {backgroundColor : '#EA7773'}]} onPress={confirmHandler}>
                        <Text>
                            Confirm 
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
            {renderNumbercontainer()}
        </View>
        </TouchableWithoutFeedback>
    )
}


const estilos = StyleSheet.create({
    title : {
        fontFamily : 'chilanka-regular',
        fontSize : 20,
        padding : 3,
        marginVertical : 10
    },
    inputContainer : {
        width : 300,
        maxWidth : '80%',
    },
    buttonContainer : {
        flexDirection : 'row',
        width : 300,
        maxWidth : '80%',
        justifyContent :'space-evenly'
    },
    button : {
        padding : 12,
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 18,
    },
    input : {
        width : 80
    },
    containerNumber : {
        marginTop : 20
    },
    number : {
        padding : 8,
        borderRadius :100,
        borderWidth : 1,
        backgroundColor : "#2B2B52",
        marginVertical : 10
    }
})