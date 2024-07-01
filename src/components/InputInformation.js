import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
//styles
import styles from "../styles/styles";
const InputInformation = ({ title, editable, value, onChangeText, placeholder, keyboardType, notification }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{title}</Text>
            <TextInput
                style={styles.textInput}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                editable={editable}
                textAlign="right"
            />
            <Text style={styles.error}>{notification}</Text>
        </View>
    )
}
export default InputInformation;