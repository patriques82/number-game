import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import PrimaryButton from "./components/PrimaryButton";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";

export default function App() {
  const [userChoice, setUserChoice] = useState(null); // valt nummer
  const [gameOver, setGameOver] = useState(false); // spelet över?
  const [rounds, setRounds] = useState(0); // datorns gissningar

  const chooseNumberHandler = (number) => {
    setUserChoice(number);
  };

  let screen = <StartGameScreen onChooseNumber={chooseNumberHandler} />;

  if (userChoice) {
    screen = (
      <GameScreen
        userChoice={userChoice}
        onGuess={() => setRounds(rounds + 1)}
        onGameOver={() => setGameOver(true)}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.image}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
