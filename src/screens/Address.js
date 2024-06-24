import React, { useState } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//components
import InputComponent from "../components/InputComponents";
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import ButtonBack from "../components/ButtonBack";

const Address = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ButtonBack  />
                <Text style={styles.titleRegister}>Địa chỉ</Text>
                <InputComponent
                    title="Tỉnh/Thành phố"
                    placeholder="Nhập tỉnh/thành phố"
                />
                <InputComponent
                    title="Quận/Huyện"
                    placeholder="Nhập quận/huyện"
                />
                <InputComponent
                    title="Phường/Xã"
                    placeholder="Nhập phường/xã"
                />
                <InputComponent
                    title="Địa chỉ cụ thể (Số nhà, Tên đường, Khu vực)"
                    placeholder="Nhập địa chỉ cụ thể"
                />
                <ButtonConfirmDown
                    title="Xác nhận"
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Address;