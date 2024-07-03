import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//components
import ButtonConfirmDown from "../components/ButtonConfirmDown";
//styles
import styles from "../styles/styles";
const FootballFieldManagement = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    return (
        <SafeAreaView style={styles.container}>
            <Text>Đây là admin</Text>
            <ButtonConfirmDown title="Thêm" onPress={() => navigation.navigate('FootballPitches')} />
        </SafeAreaView>
    )
}
export default FootballFieldManagement;