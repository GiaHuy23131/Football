import React, { useState, useEffect} from "react";
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//style
import styles from "../styles/styles";
//components
import ImageFootball from "../components/ImageFootball";
const FootballFieldDetails = () =>{
    const route = useRoute();
    // Lấy dữ liệu từ route.params
    const { arrFootball: item } = route.params ?? {};
    console.log('item',item);
    <SafeAreaView style={styles.container}>
        <ImageFootball width={'100%'} height={150} image={item.imagePitch}/>
        <Text>{item.namePitch}</Text>
    </SafeAreaView>
}
export default FootballFieldDetails;