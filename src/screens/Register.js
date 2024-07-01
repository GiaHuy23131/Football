import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//styles
import styles from "../styles/styles";
//components
import InputComponent from "../components/InputComponents";
import DropDownPickerComponents from "../components/DropDownPickerComponents";
import AddressComponents from "../components/AddressComponents";
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import ButtonBack from "../components/ButtonBack";
//Models
import UserAuth from "../models/UserAuth";
//Modules
import ModuleUserAuth from "../controller/ModuleUserAuth";
//firebase
import { auth } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthCredential} from 'firebase/auth';


const Register = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const route = useRoute();
    // Lấy dữ liệu từ route.params
    const { arrAddress } = route.params ?? '';
    const [moduleUserAuth] = useState(new ModuleUserAuth());
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Người dùng', value: 'User' },
        { label: 'Quản lý sân', value: 'Manage' }
    ]);
    const [idUserAuth, setIdUserAuth] = useState('');
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [address, setAddres] = useState([]);
    //
    const handleRegisterAuth = async () => {
        const userAuth = new UserAuth(idUserAuth,user,name,phone,email,password);;
        moduleUserAuth.registerAuth(userAuth);
        navigation.navigate('Login');
        
    };
    //check Password Again
    const checkPasswordAgain = () => {
        if (password && passwordAgain !== password) {
            return false;
        }
    }
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ButtonBack />
                <Text style={styles.titleRegister}>Đăng Ký</Text>

                <DropDownPickerComponents
                    title="Bạn là ai?"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={(item) => { setUser(item) }}//xử lý được chọn
                />
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
                    <InputComponent
                        title="Tên"
                        placeholder="Nhập tên"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <InputComponent
                        title="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <InputComponent
                        title="Email"
                        placeholder="Nhập email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputComponent
                        title="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <InputComponent
                        title="Nhập lại mật khẩu"
                        placeholder="Nhập lại mật khẩu"
                        error={checkPasswordAgain()}
                        value={passwordAgain}
                        onChangeText={(text) => setPasswordAgain(text)}
                    />
                    {user === '' || user === "User" ? null : (
                        <AddressComponents
                            title="Địa chỉ"
                            address={(arrAddress && arrAddress.length > 0) ? arrAddress[0].specificAddress : "Nhấn vào để nhập địa chỉ"}
                            onPress={() => navigation.navigate('Address')}
                        />
                    )}
                </KeyboardAwareScrollView>
                <ButtonConfirmDown
                    title="Xác nhận"
                    onPress={() => handleRegisterAuth()}
                />

            </SafeAreaView >
        </TouchableWithoutFeedback>
    )
}
export default Register;