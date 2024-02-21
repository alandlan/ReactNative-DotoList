import { View,Text,Image} from "react-native";

import imgClip from "../../assets/images/clipboard.png";
import styles from "./styles";

export default function InfoNoTask() {
    return (
        <View>
            <View
              style={styles.line}
            />
            <View style={styles.withoutTasks}>
              <Image source={imgClip} />
              <View style={styles.textInfo}>
                <Text style={styles.title}>Voce ainda nao tem tarefas cadastradas</Text>
                <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            </View>
          </View>
    );
}