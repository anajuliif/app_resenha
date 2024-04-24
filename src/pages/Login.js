import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import ImgComponent from "../components/ImgComponent";
import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  return (
    <View style={styles.container}>
        <ImgComponent imagem={require("../image/livro.png")} />
        <Text style={styles.Login}>Book Review</Text>

        <TextInput style={styles.InputName} placeholder="E-mail" />
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <ButtonComponent
          estilo={styles.BtnLogin}
          onpress={() => alert("hello")}
          title="ENTRAR"
        />

        <ButtonComponent
          estilo={styles.BtnCds}
          onpress={() => alert("hello")}
          title="Cadastre-se aqui!"
        />
      </View>
  );
}
