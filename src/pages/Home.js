import { View, ImageBackground, Text, ScrollView} from "react-native";
import { styles } from "../style/Styles";
import TxtComponent from "../components/TxtComponent"
import ButtonComponent from "../components/ButtonComponent";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.areaBackImg}>
        <ImageBackground style={styles.fundo} source={require("../image/fundo.png")}>
          <TxtComponent texto="Book Review" style={styles.bemvindo} />
          <TxtComponent texto="Bem vindo leitor, ao seu aplicativo de resenhas!" style={styles.descricao}/>
          <ButtonComponent estilo={styles.BtnLogin}
          onpress={() => alert("hello")}
          title="ENTRAR"
        />
         <ScrollView>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </ScrollView>
        </ImageBackground>
      </View>
      
    <View style={styles.footer}><Text> @BOOKREVIEW </Text></View>
    </View>
  );
}
