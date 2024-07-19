import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
const ButtonConfirm = ({title, onPress}) => {
    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    )
}
export default ButtonConfirm;