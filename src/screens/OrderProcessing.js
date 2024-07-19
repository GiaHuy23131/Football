import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import InputSearch from "../components/InputSearch";
//styles
import styles from "../styles/styles";
const OrderProcessing = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Đây là admin</Text>
        </SafeAreaView>
    )
}
export default OrderProcessing;