import { StyleSheet, Text, View } from "react-native";

export function ExpressoesJSX(){
    const nome= "Maria";
    const idade = 25;
    const preco = 20.9;

    const usuario = {
        nome: "Ana",
        cidade: "Salto",
    };


    return(
        <View style={styles.container}>
            
            <Text style={styles.titulo}> Expressões JSX</Text>
            <View>
                <Text> Nome: {nome} </Text>
                <Text> Idade: {idade} /</Text>
            </View>

            <View>
                <Text> Maiusculas: {nome.toUpperCase()} </Text>
                <Text> Soma: {preco * 2} /</Text>
            </View>

            <View>
                <Text> {usuario.nome} </Text>
                <Text> {usuario.cidade} /</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItens: "center",
        backgroundColor : "#be74ab"
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },

    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fdf6f6",
        borderRadius: 8,
    },

});