import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textStyle}>Header</Text>
        </View>
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
        <View style={styles.footer}>
            <Text style={styles.textStyle}>Footer</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
   
  },
  textStyle: {
    color: "white",
  },

    header: {
    height: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    padding: 8,
    borderRadius:8,
    alignSelf: "flex-start",
  },

  sidebar: {
    width: 80,
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
     flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  card1: {
    flex:1,
    height: 100,
    backgroundColor: "red",
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
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "#2c3e50",
    alignSelf: "stretch",
    justifyContent: "center",
    padding: 8,
    alignSelf: "flex-end"
  },
});






