import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import InputSearch from "../components/InputSearch";
//styles
import styles from "../styles/styles";
//component
import ImageFootball from "../components/ImageFootball";
//firebase
import { database, auth } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
const Home = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [arrFootball, setArrFootball] = useState([]);
    const getListFootball = () => {
        const db = ref(database, 'Football/')
        onValue(db, (snapshot) => {
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
    }, [])
    //console.log('arrFootball', arrFootball);
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imageHome}
                source={{ uri: 'https://vecgroup.vn/upload_images/images/2021/12/09/kich-thuoc-san-bong-11-nguoi(1).png' }}
            />
            <View style={styles.information}>
                <InputSearch
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
                <FlatList
                    numColumns={2}
                    data={arrFootball}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.viewFlatList, { width: '47%' }]} onPress={() => navigation.navigate('FootballFieldDetails',{arrFootball: item})}>
                                <View >
                                    <ImageFootball width={'100%'} height={150} image={item.imagePitch} />
                                    <Text>Loại sân: {item.typePitch}</Text>
                                    <Text>Tên sân: {item.namePitch}</Text>
                                    <Text>Giá sân: {item.pricePith}</Text>
                                    <Text>Địa chỉ: {item.typePitch}</Text>
                                </View>
                            </TouchableOpacity>
                        )

                    }}
                    keyExtractor={(item) => item.idPitch.toString()}
                />
            </View>

        </SafeAreaView>
    )
}
export default Home;