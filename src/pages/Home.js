import { View, ImageBackground, Text, ScrollView, Button } from "react-native";
import { styles } from "../style/Styles";
import TxtComponent from "../components/TxtComponent";
import ButtonComponent from "../components/ButtonComponent";
import ImgComponent from "../components/ImgComponent";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.areaBackImg}>
        <ImageBackground
          style={styles.fundo}
          source={require("../image/fundo.png")}
        >
          <ScrollView>
          <ImgComponent style={styles.livrao} imagem={require("../image/livrao.png")} />
            <TxtComponent texto="Book Review" style={styles.bemvindo} />
            <TxtComponent
              texto="Bem vindo leitor, ao seu aplicativo de resenhas de livros!"
              style={styles.descricao}
            />
            <ButtonComponent
              estilo={styles.BtnLogin}
              onPress={() => navigation.navigate("Login")}
              title="LOGIN"
              />
            <View>
            <ImgComponent style={styles.grupo} imagem={require("../image/grupo.png")} />
              <Text style={styles.text}>Nós somos uma equipe de estudantes do SENAI Sumaré-SP, 
              e desenvolvemos um aplicativo do zero para celulares, onde o usuário pode fazer o login, 
              cadastrar-se, fazer posts das suas resenhas e deletá-las quando logados no aplicativo. Este também 
              poderá ler as resenhas de outros usários, e avaliá-las. Aproveite o site!</Text>
            </View>
            <View style={[styles.box, {}]}>
              <Text style={styles.text}> 
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text> @BOOKREVIEW </Text>
      </View>
    </View>
  );
}
