import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>1</Text>
        </View>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>2</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>3</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.textStyle}>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  redBox: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  orangeBox: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});