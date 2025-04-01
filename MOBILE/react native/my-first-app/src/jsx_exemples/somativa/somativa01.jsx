import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Promoção</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.cardsRow}>
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

        <View style={styles.panelsRow}>
          <View style={styles.mainPanel}>
            <Text style={styles.textStyle}>Destaque</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardsRow}>
        <View style={styles.cat1}>
            <Text style={styles.textStyle}>Cat 1</Text>
          </View>
          <View style={styles.cat2}>
            <Text style={styles.textStyle}>Cat 2</Text>
          </View>
          <View style={styles.cat3}>
            <Text style={styles.textStyle}>Cat 3</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
    flexDirection: "column"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 80,
    backgroundColor: "#cb0418",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius:8,
  },
  body: {
    flex: 1,
    gap: 8,
    padding: 8,
    borderRadius:8,
  },
  cardsRow: {
    flexDirection: "row",
    gap: 8,
    height: 150,
    borderRadius:8,
  },
  card1: {
    borderRadius:8,
    flex: 1,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card2: {
    borderRadius:8,
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card3: {
    borderRadius:8,
    flex: 2,
    backgroundColor: "#f39c12",
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
    borderRadius:8,
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  footer: {
    borderRadius:8,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },




  cat1: {
    borderRadius:8,
    flex: 1,
    backgroundColor: "#9b59b6",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  cat2: {
    borderRadius:8,
    flex: 1,
    backgroundColor: "#1abc9c",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  cat3: {
    borderRadius:8,
    flex: 1,
    backgroundColor: "#e67e22",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});






