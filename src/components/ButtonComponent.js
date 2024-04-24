import { TouchableOpacity, Text } from "react-native";
import { styles } from "../style/Styles";

export default function ButtonComponent({ estilo, onpress, title}) {
  return (
    <TouchableOpacity style={estilo} onPress={onpress}> 
      <Text>{title}</Text> 
    </TouchableOpacity>
  );
}
