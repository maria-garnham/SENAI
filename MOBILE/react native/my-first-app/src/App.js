// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './navigation/stack_navigation';
// import ExercicioView08 from './jsx_exemples/exercicios/maria_julia_garnham_ferreira_exercicios/exercicio8';
// import ExercicioViewSomativa02 from './jsx_exemples/somativa/somativa02';
// import { CartaoPerfil } from './props/cartao_perfil';
// import { ExProps01 } from './props/exercicios_slide/ex01_props';
// import { Saudacao } from './props/exercicios_slide/ex03_props';
// import PerfilAluno from './props/exercicios_slide/ex04_props';
// import ContadorExample from './hooks/useState_example'
// import TelaLogin from './hooks/useRef_example';
// import TelaMoeda from './hooks/useEffect_example';
// import FormularioExemplo from './text_input/formulario';
// import FlatListExemplos from './flatlist/flatList';
// import ListaDeCompras from './flatlist/exercicioFlatList';
import BottomTabNavigator from './navigation/bottom_tab_navigation'





export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
});
