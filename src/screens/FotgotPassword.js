import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";
import ButtonBack from "../components/ButtonBack";


const ForgotPassword = () => {
    const [phone, setPhone] = useState('');
    const navigation = useNavigation(); // Sử dụng hook navigation
    //check phone
    let notification;
    const checkPhone = () => {
        if (phone && phone.length !== 10) {
            notification = "Chưa đúng";
            return false;
        }
    };
    //handlePhone
    const handlePhone = () => {
        navigation.navigate('RestPassword', { phone: phone });
    }
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ButtonBack />
                <Text style={styles.titleRegister}>Quên mật khẩu</Text>
                <InputComponent
                    title="Số điện thoại"
                    keyboardType="numeric"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    error={checkPhone()}
                    notification={notification}
                />
                <View style={styles.buttonView}>
                    <ButtonConfirm
                        onPress={() => handlePhone(phone)}
                        title="Tiếp theo"
                    />
                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default ForgotPassword;