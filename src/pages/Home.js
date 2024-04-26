import { View, ImageBackground, Text, ScrollView, Button } from "react-native";
import { styles } from "../style/Styles";
import TxtComponent from "../components/TxtComponent";
import ButtonComponent from "../components/ButtonComponent";
import ImgComponent from "../components/ImgComponent";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        
      <View style={styles.areaBackImg}>
      <ImageBackground
          style={styles.fundo}
          source={require("../image/fundo.png")}
        >            
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
            </ImageBackground>
            <View style={{backgroundColor: "white", padding: 15}}>
              <ImgComponent style={styles.grupo} imagem={require("../image/grupo.png")} />
              <Text style={styles.sobre}>Sobre nós: </Text>
              <Text style={styles.sobre2}>Nós somos uma equipe de estudantes do SENAI Sumaré-SP, 
              e desenvolvemos um aplicativo do zero para celulares, onde o usuário pode fazer o login, 
              cadastrar-se, fazer posts das suas resenhas e deletá-las quando logados no aplicativo. Este também 
              poderá ler as resenhas de outros usários, e avaliá-las. Aproveite o site! </Text>

              <ImgComponent style={styles.contato} imagem={require("../image/contato.png")} />
              <Text style={styles.ctt}>Contato: </Text>
              <Text style={styles.ctt2}>E-mail: BooksReview@gmail.com</Text>
              <Text style={styles.ctt3}>Instagram: Books_Reviewofc</Text>
              <Text style={styles.ctt4}>Whatsapp: (xx)xxxxx-xxxx</Text>

            </View>
            </View>
          </ScrollView>
      
      
      <View style={styles.footer}>
        <Text> @BOOKREVIEW </Text>
      </View>
    </View>
  );
}
