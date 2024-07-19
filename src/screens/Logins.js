import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";
//controller
import ModuleUserAuth from "../controller/ModuleUserAuth";
//Models
import UserAuth from "../models/UserAuth";

const Logins = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [moduleUserAuth] = useState(new ModuleUserAuth());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (email, password) => {
        moduleUserAuth.loginAuth(email, password, navigation);
    }
    return (
        // Close keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Đăng Nhập</Text>
                    <Text style={styles.subtitle}>Sân bóng</Text>
                    <InputComponent
                        title="Tài khoản"
                        placeholder="Nhập tài khoản"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address" // Đặt kiểu bàn phím cho email
                    />
                    <InputComponent
                        title="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry // Ẩn mật khẩu
                    />
                    <View style={styles.buttonView}>
                        <ButtonConfirm
                            title="Xác nhận"
                            onPress={() => handleLogin(email, password)}
                        />
                    </View>

                    <View style={styles.footerView}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                        <Text style={[styles.titleInput,{marginTop: 20}]}>Hoặc</Text> 
                        <View style={styles.registerView}>
                            <Text style={styles.registerText}>Bạn chưa có tài khoản? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.registerButtonText}>Đăng ký ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default Logins;