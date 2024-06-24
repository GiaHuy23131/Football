import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
//styles
import styles from "../styles/styles";
const InputComponent = ({ title, error, value, onChangeText, placeholder, keyboardType, notification}) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.titleInput}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={value} 
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
                {error === false ? ( 
                    <Error name='error' color="red" size={27} style={styles.errorIcon} />
                ) : value ? (
                    <Feather name='check-circle' color="green" size={27} style={styles.errorIcon} />
                ) : null}
            </View>
            <Text style={styles.error}>{notification}</Text>
        </View>
    )
}
export default InputComponent;