import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
const ButtonConfirm = ({title, onPress}) => {
    return(
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ButtonConfirm;