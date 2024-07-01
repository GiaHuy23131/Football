import React,{ useState } from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback,Image} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
const Home = () => {
    return(
        <SafeAreaView>
            <Image 
            style={styles.imageHome}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvecgroup.vn%2Fsan-the-thao%2Fkich-thuoc-san-bong-da-11-nguoi-chuan-fifa-n72.html&psig=AOvVaw01XajougqXRcBphrXu9M4N&ust=1719909015929000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCU7MC2hYcDFQAAAAAdAAAAABAE"
            />
        </SafeAreaView>
    )
}
export default Home;