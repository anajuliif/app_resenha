import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import ImgComponent from "../components/ImgComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.areaBackImg}>
      <View style={styles.caixa}> 
        <ImgComponent style={styles.livrao} imagem={require("../image/livrao.png")} />
        <Text style={styles.Login}>Login</Text>

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
          onPress={() => navigation.navigate("Cadastro")}
          title="Cadastre-se aqui!"
        />
        </View>
      </View>
  );
}
