import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
  const frutas = ["Maçã", "Laranja", "Manga", "Goiaba"];
  const alunos = [
    { id: 1, nome: "Jonas", nota: 0 },
    { id: 2, nome: "Julia", nota: 9 },
    { id: 3, nome: "Hanna", nota: 7 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.exemplo}>
        <Text style={styles.titulo}>Exemplo 04 - Métodos</Text>
        <Text style={styles.subtitulo}>Map Padrão</Text>

        {frutas.map((fruta, indice) => (
          <Text key={indice}>
            {indice + 1} - {fruta}
          </Text>
        ))}
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.titulo}> Map em Objetos</Text>
        <Text style={styles.subtitulo}>Map em Objetos</Text>
        {alunos.map((aluno) => (
          <Text key={aluno.id}>
            {aluno.nome} - {aluno.nota}
          </Text>
        ))}
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.titulo}>Exemplo 4- Map com Filter</Text>
        <Text style={styles.subtitulo}>Map com Filter</Text>
        {alunos
          .filter((aluno) => aluno.nota >= 7)
          .map((aluno) => (
            <Text key={aluno.id}>Aprovado: {aluno.nome}</Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2a4a4",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
