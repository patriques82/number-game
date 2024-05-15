import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";

function generateRandomNumber(min, max, exclude) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  if (number === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return number;
  }
}

const GameScreen = ({ userChoice, onGuess, onGameOver }) => {
  const [guess, setGuess] = useState(generateRandomNumber(1, 100, userChoice));

  return (
    <View style={styles.container}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{userChoice}</NumberContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
});

export default GameScreen;
