import { TouchableOpacity, Text } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";

export default function ButtonComponent({ estilo, onPress, title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={estilo} onPress={onPress}> 
      <Text>{title}</Text> 
    </TouchableOpacity>
  );
}
