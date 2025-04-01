import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>Coluna 1</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Coluna 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    flexDirection: "row",
    gap: 8,
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  greenBox: {
    flex: 2,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
