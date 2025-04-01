//Maria Julia Garnham Ferreira


import { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const livros = [
  {
    id: '1',
    titulo: 'Dom Casmurro',
    genero: 'Romance / Drama',
    editora: 'Companhia das Letras',
    nota: '10/10',
    sinopse:
      'Bento Santiago narra sua historia ao lado de Capitu, marcada pela duvida e pelo ciume. Machado de Assis entrega uma das obras mais discutidas da literatura brasileira.',
  },
  {
    id: '2',
    titulo: '1984',
    genero: 'Ficcao Cientifica / Distopia',
    editora: 'Companhia das Letras',
    nota: '10/10',
    sinopse:
      'Em uma sociedade vigiada pelo Grande Irmao, Winston Smith desafia um regime totalitario que controla ate os pensamentos. George Orwell criou um classico atemporal sobre liberdade e opressao.',
  },
  {
    id: '3',
    titulo: 'O Senhor dos Aneis',
    genero: 'Fantasia / Aventura',
    editora: 'HarperCollins',
    nota: '10/10',
    sinopse:
      'Frodo e seus companheiros embarcam em uma jornada para destruir um anel amaldicoado. J.R.R. Tolkien construiu um dos maiores universos da fantasia moderna.',
  },
  {
    id: '4',
    titulo: 'Harry Potter e a Pedra Filosofal',
    genero: 'Fantasia / Aventura',
    editora: 'Rocco',
    nota: '9/10',
    sinopse:
      'Um garoto orfao descobre que e bruxo e ingressa em Hogwarts. J.K. Rowling deu inicio a uma das sagas mais lidas do mundo.',
  },
  {
    id: '5',
    titulo: 'A Revolucao dos Bichos',
    genero: 'Satira / Ficcao Politica',
    editora: 'Companhia das Letras',
    nota: '10/10',
    sinopse:
      'Os animais de uma fazenda se rebelam contra os humanos e criam seu proprio governo. George Orwell faz uma critica afiada ao totalitarismo.',
  },
  {
    id: '6',
    titulo: 'Cem Anos de Solidao',
    genero: 'Realismo Magico / Drama',
    editora: 'Record',
    nota: '10/10',
    sinopse:
      'A saga da familia Buendia ao longo de geracoes na cidade de Macondo. Gabriel Garcia Marquez entrega uma das obras-primas do realismo magico.',
  },
];

// TODO: adicionar { navigation } como parametro
export default function HomeScreen({navigation}) {
  const [busca, setBusca] = useState('');
  const [livrosFiltrados, setLivrosFiltrados] = useState(livros);

  useEffect(() => {
    const resultado = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setLivrosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card} onPress={() => navigation.navigate('Detalhe', { ...item })}
        // TODO: onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
        <View style={styles.notaBadge}>
          <Text style={styles.notaTexto}>{item.nota}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Catalogo de Livros</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um livro para ver os detalhes
        </Text>
      </View>
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar livro..."
          placeholderTextColor="#666666"
          value={busca}
          onChangeText={setBusca}
        />
      </View>
      <FlatList
        data={livrosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#AAAAAA',
    marginTop: 4,
  },
  buscaContainer: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  buscaInput: {
    backgroundColor: '#252525',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
  },
  lista: {
    paddingVertical: 12,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#FF6B35',
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#AAAAAA',
  },
  notaBadge: {
    backgroundColor: '#252525',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  notaTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B35',
  },
});
