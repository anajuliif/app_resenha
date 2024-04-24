import { TextInput, Text, View } from "react-native";
import { styles } from "../style/Styles";
import ImgComponent from "../components/ImgComponent";
import { useState } from "react";

export default function ReviewEdit() {

  const [ resenha, setResenha ] = useState("");

  const res = (txt) =>{
    setResenha(txt);
  }

  return (
    <View style={styles.container}>
      <ImgComponent imagem={require("../image/Livros2.png")} />
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
