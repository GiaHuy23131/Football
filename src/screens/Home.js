import React, { useState } from "react";
import { SafeAreaView, View, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import InputSearch from "../components/InputSearch";
//styles
import styles from "../styles/styles";
const Home = () => {
    const [search, setSearch] = useState('');
    const [arrFootball, setArrFootball] = useState([]);
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imageHome}
                source={{ uri: 'https://vecgroup.vn/upload_images/images/2021/12/09/kich-thuoc-san-bong-11-nguoi(1).png' }}
            />
            <View style={styles.inputView}>
                <InputSearch
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
                <FlatList
                    data={arrFootball}
                    renderItem={({ item }) => (
                        <View>
                            
                        </View>
                    )}
                />
            </View>

        </SafeAreaView>
    )
}
export default Home;