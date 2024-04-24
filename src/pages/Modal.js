import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Modal() {
  const navigation = useNavigation();
  return <View styles={styles.container}></View>;
}
