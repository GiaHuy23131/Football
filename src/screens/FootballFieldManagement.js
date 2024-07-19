import React, { useState, useEffect} from "react";
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//components
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import FlatListFootball from "../components/FlatListFootball";
//styles
import styles from "../styles/styles";
//firebase
import { database, auth } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

const FootballFieldManagement = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [arrFootball,setArrFootball] = useState([]);
    //chạy khi có dữ liệu thay đổi
    const getListFootball = () => {
        const db = ref(database,'Football/')
        onValue(db,(snapshot)=> {
            const data = snapshot.val();
            if (data !== null) {
                const arr = Object.values(data); 
                setArrFootball(arr);
            }
            else {
                console.log('data null');
            }
        })
    }
    useEffect(() => {
        getListFootball();
    },[])
    console.log('arrFootball',arrFootball);
    return (
        <SafeAreaView style={styles.container}>
           <FlatListFootball 
           data={arrFootball}
           />
            <ButtonConfirmDown title="Thêm" onPress={() => navigation.navigate('FootballPitches')} />
        </SafeAreaView>
    )
}
export default FootballFieldManagement;