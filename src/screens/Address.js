import React, { useState } from "react";
import { SafeAreaView, View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//components
import InputComponent from "../components/InputComponents";
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import ButtonBack from "../components/ButtonBack";
import AddressRegister from "../models/AddressRegister.js";

const Address = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [city, setCity] = useState('');
    const [district,setDistrict] = useState('');
    const [wards,setWards] = useState('');
    const [specificAddress,setSpecificAddress] = useState('');
    const [arrAddress, setArrAddress] = useState([]);
    const hanldAddress = () => {
        arrAddress.push(new AddressRegister(city,district,wards,specificAddress));
        navigation.navigate('Register',{arrAddress: arrAddress});
        console.log('arrAddress',arrAddress);
    }
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ButtonBack  />
                <Text style={styles.titleRegister}>Địa chỉ</Text>
                <InputComponent
                    title="Tỉnh/Thành phố"
                    placeholder="Nhập tỉnh/thành phố"
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                <InputComponent
                    title="Quận/Huyện"
                    placeholder="Nhập quận/huyện"
                    value={district}
                    onChangeText={(text) => setDistrict(text)}
                />
                <InputComponent
                    title="Phường/Xã"
                    placeholder="Nhập phường/xã"
                    value={wards}
                    onChangeText={(text) => setWards(text)}
                />
                <InputComponent
                    title="Địa chỉ cụ thể (Số nhà, Tên đường, Khu vực)"
                    placeholder="Nhập địa chỉ cụ thể"
                    value={specificAddress}
                    onChangeText={(text) => setSpecificAddress(text)}
                />
                <ButtonConfirmDown
                    title="Xác nhận"
                    onPress={() => hanldAddress()}
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default Address;