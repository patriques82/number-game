import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import InstructionText from "../components/IntstructionText";
import PrimaryButton from "../components/PrimaryButton";

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
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.controls}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>+</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  instructionText: {
    marginBottom: 12,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
