import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  return (
    <View style={styles.container}>
        <Text style={styles.Login}>Cadastrar-se</Text>

        <TextInput style={styles.InputName} placeholder="Nome completo:" />
        <TextInput style={styles.InputName} placeholder="Nome de usuário:" />
        <TextInput style={styles.InputName} placeholder="E-mail:" />
        <TextInput style={styles.InputName} placeholder="Senha:" />
        

        <ButtonComponent
          estilo={styles.BtnLogin}
          onpress={() => alert("hello")}
          title="Cadastro"
        />
    </View>
  );
}
