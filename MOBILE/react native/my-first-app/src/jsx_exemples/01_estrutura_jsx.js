import { Text, View } from "react-native";

export function EstruturaJSX(){
    return(
        // Retorno Único
        <View>
            <Text>Exemplo de Retorno Único</Text>
            
            {/* Retorno Único com Fragment <> </>*/}
            <View>
                <>
                <Text></Text>
                
                </>
            </View>
        </View>
    );
}