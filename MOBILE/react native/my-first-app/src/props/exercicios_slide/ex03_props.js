


import { Text, View, StyleSheet } from "react-native";

export function Saudacao({ nome }) {
  return (
    <Text style= {styles.nome}>Olá, {nome}! Bem-vindo(a)</Text>
  );
}


const styles = StyleSheet.create({
    nome:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,

    }
})