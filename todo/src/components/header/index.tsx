import { View, Image, Text } from "react-native";

import styles from "./styles";
import imgLogo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={imgLogo} />
    </View>
  );
}