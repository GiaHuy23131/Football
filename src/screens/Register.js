import React, { useState } from "react";
import { View, Text, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//components
import InputComponent from "../components/InputComponents";
import DropDownPickerComponents from "../components/DropDownPickerComponents";
import AddressComponents from "../components/AddressComponents";
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import ButtonBack from "../components/ButtonBack";

const Register = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
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
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [address, setAddres] = useState('');
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
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
                <ScrollView>
                    <InputComponent
                        title="Tên"
                        placeholder="Nhập tên"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <InputComponent
                        title="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <InputComponent
                        title="Tài khoản"
                        placeholder="Nhập tài khoản"
                        value={account}
                        onChangeText={(text) => setAccount(text)}
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
                        value={passwordAgain}
                        onChangeText={(text) => setPasswordAgain(text)}
                    />
                    {user === '' || user === "User" ? null : (
                        <AddressComponents
                            title="Địa chỉ"
                            address="Nhấn vào để nhập địa chỉ"
                            value={address}
                            onChangeText={(text) => setAddres(text)}
                            onPress={() => navigation.navigate('Address')}
                        />
                    )}

                </ScrollView>
                <ButtonConfirmDown
                    title="Xác nhận"
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Register;