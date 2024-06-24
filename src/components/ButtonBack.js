import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
const ButtonBack = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    return(
        <View style={styles.buttonBack}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={30} color="#000000" />
            </TouchableOpacity>
        </View>
    )
}
export default ButtonBack;