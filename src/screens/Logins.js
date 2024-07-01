import React,{ useState } from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";
//
import ModuleUserAuth from "../controller/ModuleUserAuth";

const Logins = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [moduleUserAuth] = useState(new ModuleUserAuth());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (email,password) => {
        moduleUserAuth.loginAuth(email,password);
        navigation.navigate('VerificationOTP');
    }
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Đăng Nhập</Text>
                <Text style={styles.title2}>Sân bóng</Text>
                <InputComponent
                    title="Tài khoản"
                    placeholder="Nhập tài khoản"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <InputComponent
                    title="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <ButtonConfirm
                    title="Xác nhận"
                    onPress={() => handleLogin(email,password)}
                />
                <View style={styles.registerView}>
                    <Text>Bạn có tài khoản chưa? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: 'gray' }}>Đăng ký ngay </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forgotPasswordView}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{ color: 'red' }}>Quên mật khẩu </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default Logins;