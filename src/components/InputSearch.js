import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
//styles
import styles from "../styles/styles";
const InputSearch = ({value, onChangeText, placeholder, keyboardType, notification}) => {
    return (
            <View style={styles.inputContainer}>
                <Icon name="search" size={25} color="#000000" />
                <TextInput
                    style={styles.textInput}
                    value={value} 
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            <Text style={styles.error}>{notification}</Text>
        </View>
    )
}
export default InputSearch;