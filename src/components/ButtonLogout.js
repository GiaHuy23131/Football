// components/LogoutButton.js
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//styles
import styles from '../styles/styles';
//firebase
import {signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const ButtonLogout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
        Alert.alert('Thông báo', 'Đăng xuất thành công');
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        Alert.alert('Lỗi', error.message);
      });
  };

  return ( 
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text style={[styles.buttonText,{color: 'red'}]}>Đăng xuất</Text>
      </TouchableOpacity>
  );
};
export default ButtonLogout;