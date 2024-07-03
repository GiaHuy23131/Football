// components/LogoutButton.js
import React from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//styles
import styles from '../styles/styles';

const ButtonUser = ({ user }) => {
    const navigation = useNavigation();

    const handleUser = () => {
        navigation.navigate('AccountInformation',{info : false});
    };

    return (
        <View>
            <TouchableOpacity onPress={() => handleUser()}>
                <View style={styles.userContent}>
                    <Icon name="user" size={35} color="#000" />
                    <Text style={styles.username}>{user.email}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default ButtonUser;