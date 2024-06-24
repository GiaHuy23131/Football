import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
const ButtonConfirmDown = ({title, onPress}) => {
    return(
        <View style={styles.buttonView2}>
            <TouchableOpacity style={styles.buttonDown} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ButtonConfirmDown;