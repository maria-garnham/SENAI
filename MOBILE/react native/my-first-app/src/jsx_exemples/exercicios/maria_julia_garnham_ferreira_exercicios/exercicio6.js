import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Header</Text>
      </View>
      <View style={styles.greyBox}>
        <Text style={styles.textStyle}>Main Content</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>Footer</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Header</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  greenBox: {
    height: 60,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  greyBox: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
