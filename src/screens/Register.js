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
import Address from "../models/Address";
//Modules
import ModuleUserAuth from "../controller/ModuleUserAuth";

const Register = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const route = useRoute();
    // Lấy dữ liệu từ route.params
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
    const [city, setCity] = useState('');
    const [district,setDistrict] = useState('');
    const [wards,setWards] = useState('');
    const [specificAddress,setSpecificAddress] = useState('');
    //tạo fields map
    const fields = [
        { title: "Tên", placeholder: "Nhập tên", value: name, onChangeText: (text) => setName(text) },
        { title: "Số điện thoại", placeholder: "Nhập số điện thoại", value: phone, onChangeText: (text) => setPhone(text) },
        { title: "Email", placeholder: "Nhập email", value: email, onChangeText: (text) => setEmail(text) },
        { title: "Mật khẩu", placeholder: "Nhập mật khẩu", value: password, onChangeText: (text) => setPassword(text) },
        { title: "Nhập lại mật khẩu", placeholder: "Nhập lại mật khẩu", value: passwordAgain, onChangeText: (text) => setPasswordAgain(text) },
        //Nếu là User =[] ngược lại...
        ...(user === '' || user === "User" ? [] : [
            { title: "Tỉnh/Thành phố", placeholder: "Nhập tỉnh/thành phố", value: city, onChangeText: (text) => setCity(text) },
            { title: "Quận/Huyện", placeholder: "Nhập quận/huyện", value: district, onChangeText: (text) => setDistrict(text) },
            { title: "Phường/Xã", placeholder: "Nhập phường/xã", value: wards, onChangeText: (text) => setWards(text) },
            { title: "Địa chỉ cụ thể (Số nhà, Tên đường, Khu vực)", placeholder: "Nhập địa chỉ cụ thể", value: specificAddress, onChangeText: (text) => setSpecificAddress(text) }
        ])
    ].filter(Boolean);// Loại bỏ các phần tử null
    //
    const handleRegisterAuth = async () => {
        const address = new Address(city,district,wards,specificAddress);
        const userAuth = new UserAuth(idUserAuth, user, name, phone, email, password,address);
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
                    size={70}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={(item) => { setUser(item) }}//xử lý được chọn
                />
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
                    {fields.map((field, index) => (
                        <InputComponent
                            key={index}
                            title={field.title}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChangeText={field.onChangeText}
                        />
                    ))}
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