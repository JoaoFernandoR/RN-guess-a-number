import React, {useState} from 'react';
import { View } from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
// componentes
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

const [fontLoaded, setLoaded] = useState(false)
const [userNumber, setuserNumber] = useState()
const [guessRounds, setGuessRounds] = useState(0)

const loadFonts = () => {
  return Font.loadAsync({
  'chilanka-regular' : require('./assets/fonts/Chilanka-Regular.ttf'),
  'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-light' : require('./assets/fonts/Roboto-Light.ttf'),
  'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
  'roboto-thin' : require('./assets/fonts/Roboto-Thin.ttf'),
  })
}

if(!fontLoaded) {
    return (
    <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)}/>
    )
}

  gameRestartHandler = () => {
    setGuessRounds(0)
    setuserNumber(null)

  }

  valueScreen = (value) => {
    setuserNumber(value)
    setGuessRounds(0)
  }

  onGameOver = (manyTimes) => {
    setGuessRounds(manyTimes)
  }


  screenHandler = () => { 
    if (userNumber && guessRounds <= 0)
    return <GameScreen userNumber={userNumber} onGameOver={onGameOver}/>
    if (guessRounds > 0)
    return <GameOverScreen guessRounds={guessRounds} userNumber={userNumber} gameRestartHandler={gameRestartHandler}/>
    else
    return <StartGameScreen valueScreen={valueScreen}/>
  }

  return (
    <View style={{flex : 1}}>
      <Header />
      { screenHandler() }
    </View>
  );
}

