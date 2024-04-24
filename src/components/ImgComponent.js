import { Image } from "react-native";

export default function ImgComponent({ imagem, style }) {
  return <Image style={style} source={imagem} />;
}
