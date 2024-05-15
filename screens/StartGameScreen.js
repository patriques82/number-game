import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import InstructionText from "../components/IntstructionText";

const StartGameScreen = ({ onChooseNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (text) => setEnteredValue(text);
  const resetHandler = () => setEnteredValue("");

  function confirmHandler() {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber < 0 || choosenNumber > 99) {
      Alert.alert("Wrong input", "You must choose a number between 0 and 99", [
        { text: "Ok", style: "cancel", onPress: resetHandler },
      ]);
      return;
    }
    onChooseNumber(choosenNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
          value={enteredValue}
          style={styles.numberInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
});

export default StartGameScreen;
