import { Text, View, StyleSheet } from "react-native";

export function CartaoUsuario({ nome, email }) {
  return (
    <View>
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </View>
  )
};

