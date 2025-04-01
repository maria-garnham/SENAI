import { Text, View, StyleSheet } from "react-native";

export function ExProps01({produto , preco}){
    return(
        <View style={styles.card}> 
            <Text style= {styles.produto}> Produto: {produto} </Text>
            <Text style= {styles.preco}> Preço: R${preco} </Text>
        </View>
    );
}




const styles = StyleSheet.create({
    card:{
        backgroundColor: '#f7f3f3',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#d0d2d7',
        marginBottom: 10,
        
        
    },

    produto:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,

    },

    info: {
        fontSize: 14,
        color: '#6b7280'
    }

    
})