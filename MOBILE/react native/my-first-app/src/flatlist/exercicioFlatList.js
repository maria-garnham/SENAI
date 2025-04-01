import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

export default function ListaDeCompras() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [produtos, setProdutos] = useState([]);

  function handleAdicionar() {
    // Validação
    if (!produto.trim() || !quantidade.trim()) {
      Alert.alert("Atenção", "Digite o nome do produto antes de adicionar.");
      return;
    }

    // Novo produto
    const novoProduto = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    

    // Adiciona na lista
    setProdutos([...produtos, novoProduto]);

    // Limpa os campos
    setProduto("");
    setQuantidade("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={produto}
        onChangeText={setProduto}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Sua lista está vazia. Adicione um produto!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>

            <Text style={styles.quantidadeProduto}>
              Quantidade: {item.quantidade}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  nomeProduto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  quantidadeProduto: {
    fontSize: 16,
    color: "#555",
  },

  listaVazia: {
    textAlign: "center",
    color: "gray",
    marginTop: 30,
    fontSize: 16,
  },
});
