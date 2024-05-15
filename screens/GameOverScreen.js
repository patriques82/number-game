import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Colors";

const GameOverScreen = ({ userChoice, rounds }) => {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.hightlight}>{userChoice}</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: "black",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlight: {
    color: Colors.primary500,
  },
});

export default GameOverScreen;
