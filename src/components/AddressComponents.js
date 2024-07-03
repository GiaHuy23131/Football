import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
//styles
import styles from "../styles/styles";
const AddressComponents = ({title, address, onPress}) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.titleInput}>{title}</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
                <Text style={styles.textInput}>{address}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddressComponents;