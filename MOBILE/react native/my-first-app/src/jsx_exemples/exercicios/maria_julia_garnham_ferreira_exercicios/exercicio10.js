import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.cardsRow}>
          <View style={styles.card1}>
            <Text style={styles.textStyle}>1</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.textStyle}>2</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.textStyle}>3</Text>
          </View>
        </View>

        <View style={styles.panelsRow}>
          <View style={styles.mainPanel}>
            <Text style={styles.textStyle}>Painel Principal</Text>
          </View>
          <View style={styles.sidePanel}>
            <Text style={styles.textStyle}>Lateral</Text>
          </View>
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
  },
  textStyle: {
    color: "black",
  },
  header: {
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  body: {
    flex: 1,
    gap: 8,
    padding: 8,
  },
  cardsRow: {
    flexDirection: "row",
    gap: 8,
    height: 80,
  },
  card1: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card2: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card3: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#f9ca24",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  panelsRow: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  mainPanel: {
    borderRadius: 10,
    flex: 2,
    backgroundColor: "#ffb8c6",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  sidePanel: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  footer: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});






