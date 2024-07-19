import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
//styles
import styles from "../styles/styles";
const InputComponent = ({componentKey, title, error, value, onChangeText, placeholder, keyboardType, notification}) => {
    return (
        <View key={componentKey} style={styles.inputView}>
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
                    <Error name='error' color="red" size={25} style={styles.errorIcon} />
                ) : value ? (
                    <Feather name='check-circle' color="green" size={25} style={styles.errorIcon} />
                ) : null}
            </View>
            <Text style={styles.error}>{notification}</Text>
        </View>
    )
}
export default InputComponent;