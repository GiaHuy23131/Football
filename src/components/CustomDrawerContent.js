import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import ButtonLogout from './ButtonLogout';
import ButtonUser from './ButtonUser';
//styles
import styles from '../styles/styles';
    
const CustomDrawerContent = (props) => {
    const { user } = props;  // Lấy thông tin người dùng từ props
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.content1}>
            <ButtonUser user={user} />
            <Text style={styles.line}></Text>
            <View style={styles.content1}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.logout}>
                <ButtonLogout />
            </View>
        </DrawerContentScrollView>
    );
};
export default CustomDrawerContent;