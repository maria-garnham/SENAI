import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
const Botao = ({ titulo }) => {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};
export default function BottomComponent() {
  return (
    <View style={styles.container}>
      <Botao titulo="Entrar" />
      <Botao titulo="Sair" />
      <Botao titulo="Cadastrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: 150,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});