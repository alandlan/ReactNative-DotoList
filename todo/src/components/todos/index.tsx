
import { View, Text, TouchableOpacity, Switch, Image } from "react-native"
import { CheckBox } from "react-native-btr";
import styles from "./styles"

import imgTrash from "../../assets/images/trash.png"

type TodosProps = {
    title: string;
    done: boolean;
    onRemove: () => void;
    onDone: () => void;
}

export default function Todos({ title, done, onRemove, onDone}: TodosProps) {
    return (
        <View style={styles().container}>
            <CheckBox
                borderRadius={10}
                checked={done}
                color="#5E60CE"
                disabled={false}
                onPress={onDone}
            />

            <Text style={styles(done).name}>{title}</Text>

            <TouchableOpacity style={styles().button} onPress={onRemove}>
                <Image style={styles().buttonImg} source={imgTrash} />
            </TouchableOpacity>
        </View>
    )
}