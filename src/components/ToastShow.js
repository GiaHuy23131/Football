import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
//styles
import styles from "../styles/styles";
const ToastShow = ({type, text1, text2, backgroundColor}) => {
    Toast.show({
        type: type,
        position: 'top',
        text1: text1,
        text2: text2,
        backgroundColor: backgroundColor,
        visibilityTime: 3000, // Thời gian hiển thị thông báo (ms)
        autoHide: true,     // Tự động ẩn thông báo sau thời gian hiển thị
        topOffset: 10,      // Khoảng cách từ trên xuống
        bottomOffset: 40,  // Khoảng cách từ dưới lên
        onHide: () => console.log('Toast đã ẩn'), // Callback khi thông báo ẩn
    });
}
export default ToastShow;