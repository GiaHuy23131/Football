import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { auth } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber, RecaptchaVerifier  } from "firebase/auth";
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";
import ButtonBack from "../components/ButtonBack";
import ModuleUserAuth from "../controller/ModuleUserAuth";


const VerificationOTP = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const route = useRoute();
    //const {userAuth, verificationId} = route.params;
    const [moduleUserAuth] = useState(new ModuleUserAuth());
    const [verificationCode, setVerificationCode] = useState('');
    //check phone
    let notification;
    const checkPhone = () => {
        if (phone && phone.length !== 10) {
            notification = "Chưa đúng";
            return false;
        }
    };
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ButtonBack />
                <Text style={styles.titleRegister}>OTP</Text>
                <InputComponent
                    title="Mã xác minh"
                    keyboardType="numeric"
                    placeholder="Nhập mã xác minh"
                    value={verificationCode}
                    onChangeText={(text) => setVerificationCode(text)}
                    error={checkPhone()}
                    notification={notification}
                />
                <ButtonConfirm
                    onPress={() => hanndleRegisterUserAuth()}
                    title="Tiếp theo"
                />

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default VerificationOTP;