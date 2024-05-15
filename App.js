import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import PrimaryButton from "./components/PrimaryButton";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState(null); // valt nummer
  const [gameOver, setGameOver] = useState(false); // spelet över?
  const [rounds, setRounds] = useState(0); // datorns gissningar

  const chooseNumberHandler = (number) => {
    setUserChoice(number);
    console.log(number);
  };

  let screen = <StartGameScreen onChooseNumber={chooseNumberHandler} />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
