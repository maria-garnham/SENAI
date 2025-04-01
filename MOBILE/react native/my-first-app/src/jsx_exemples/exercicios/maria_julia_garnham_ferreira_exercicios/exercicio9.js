import { StyleSheet, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
      <View style={styles.trafficLight}>
        <View style={styles.redCircle} />
        <View style={styles.yellowCircle} />
        <View style={styles.greenCircle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trafficLight: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 12,
  },
  redCircle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "red",
  },
    greenCircle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "green",
  },

  yellowCircle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "yellow",
  },
  
});