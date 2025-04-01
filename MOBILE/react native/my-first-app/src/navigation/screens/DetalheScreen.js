// ============================================
// TELA: DetalheScreen
// ============================================

import { StyleSheet, Text, View, Button } from "react-native";

export default function DetalheScreen({navigation, route}) {
  const{titulo, descricao} = route.params ?? {}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo ?? "Pedido Vazio"}</Text>
      <Text style={styles.titulo}>{descricao ?? "Tente Novamente"}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
