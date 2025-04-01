//Maria Julia Garnham Ferreira

import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardLivro } from "../components";

const livrosMock = [
  {
    id: "1",
    titulo: "Dom Casmurro",
    genero: "Romance / Drama",
    editora: "Companhia das Letras",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "O Senhor dos Aneis",
    genero: "Fantasia / Aventura",
    editora: "HarperCollins",
    nota: "10/10",
  },
];

// TODO: adicionar { route } como parametro da funcao
export default function ListaScreen({route}) {
  const [itensSalvos, setItensSalvos] = useState(livrosMock);

  // TODO: utilizar useEffect para observar route.params e adicionar o novo livro ao estado da lista
  // useEffect(() => {
  //   if (route.params?.novoLivro) {
  //     setItensSalvos(...);
  //   }
  // }, [... colocar a variavel de estado]);

  useEffect(() => {
    if (route.params?.novoLivro) {
      setItensSalvos(...itensSalvos);
    }
  }, [itensSalvos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardLivro
            titulo={item.titulo}
            genero={item.genero}
            editora={item.editora}
            nota={item.nota}
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>L</Text>
            </View>
            <Text style={styles.titulo}>Nenhum livro salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um livro e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  header: {
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  listaVazia: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "#FF6B35",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#AAAAAA",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: "#666666",
    textAlign: "center",
    lineHeight: 20,
  },
});
