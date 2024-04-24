import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import ImgComponent from "../components/ImgComponent";

export default function Cadastro() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.caixa2}> 
       <ImgComponent style={styles.livrao2} />
       <ImgComponent imagem={require("../image/livrao.png")}/>
        <Text style={styles.Login}>Cadastrar-se</Text>
      
        <TextInput style={styles.InputName} placeholder="Nome completo:" />
        <TextInput style={styles.InputName} placeholder="Nome de usuário:" />
        <TextInput style={styles.InputName} placeholder="E-mail:" />
        <TextInput style={styles.InputName} placeholder="Senha:" />
        

        <ButtonComponent
          estilo={styles.BtnLogin}
          onPress={() => navigation.navigate("Login")}
          title="Cadastrar"
        />
        </View>
    </View>
  );
}
