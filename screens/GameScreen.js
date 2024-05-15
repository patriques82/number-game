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

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoice, onGuess, onGameOver }) => {
  const [guess, setGuess] = useState(generateRandomNumber(1, 100, userChoice));

  useEffect(() => {
    if (userChoice === guess) {
      onGameOver();
    }
  }, [guess]);

  function guessNumber(sign) {
    if (sign === "+") {
      minBoundary = guess + 1;
    } else {
      maxBoundary = guess;
    }
    setGuess(generateRandomNumber(minBoundary, maxBoundary, guess));
    onGuess();
  }

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
            <PrimaryButton
              onPress={() => guessNumber("-")}
              style={styles.large}
            >
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => guessNumber("+")}
              style={styles.large}
            >
              +
            </PrimaryButton>
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
  large: {
    fontSize: 20,
  },
});

export default GameScreen;
