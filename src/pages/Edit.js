import { TextInput, Text, View } from "react-native";
import { styles } from "../style/Styles";
import ImgComponent from "../components/ImgComponent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ReviewEdit() {

  const navigation = useNavigation();

  const [ resenha, setResenha ] = useState("");

  const res = (txt) =>{
    setResenha(txt);
  }

  return (
    <View style={styles.container}>
        <TextInput
          style={styles.titulo}
          placeholder="Digite o Titulo da Obra"
        />
        <TextInput
          style={styles.InputReview}
          placeholder="Deixe seu Feedback"
          onChangeText={res}
        />

        <Text> {resenha} </Text>
    </View>
  );
}
