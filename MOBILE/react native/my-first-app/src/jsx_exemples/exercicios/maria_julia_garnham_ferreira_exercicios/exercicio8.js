import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.textStyle}>Sidebar</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card1}>
          <Text style={styles.textStyle}>Card 1</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.textStyle}>Card 2</Text>
        </View>
        <View style={styles.card3}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  textStyle: {
    color: "black",

  },
  sidebar: {
    width: 80,
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  card1: {
    flex:1,
    height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  card2: {
    flex:1,
    height: 100,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  card3: {
    flex: 1,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});






