import React, { useState, useEffect } from "react";
import { SafeAreaView, View,} from "react-native";
import { useRoute } from '@react-navigation/native';
//components
import ButtonConfirm from "../components/ButtonConfirm";
import InputInformation from "../components/InputInformation";
//styles
import styles from "../styles/styles";
//firebase
import { database, auth } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
//models
import UserAuth from "../models/UserAuth";
import Address from "../models/Address";
//controller
import ModuleUserAuth from "../controller/ModuleUserAuth";
const AccountInformation = () => {
    const user = auth.currentUser;  // Lấy thông tin người dùng hiện tại
    const route = useRoute();
    // Lấy dữ liệu từ route.params
    const { info: initialInfo } = route.params ?? { info: false };
    const [info, setInfo] = useState(initialInfo);
    const [dataList, setDataList] = useState({});
    const [moduleUserAuth] = useState(new ModuleUserAuth());
    const [idUserAuth, setIdUserAuth] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [wards, setWards] = useState('');
    const [specificAddress, setSpecificAddress] = useState('');
    //Đọc dữ liệu firebase 
    const getListInformation = () => {
        const db = ref(database, 'UserAuth/' + user.uid)
        onValue(db, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                setDataList(data);
            }
            else {
                console.log('data null');
            }
        });
    }

    const clickUpdate = () => {
        if (dataList) {
            setIdUserAuth(dataList.idUserAuth || '');
            setName(dataList.name || '');
            setPhone(dataList.phone || '');
            setEmail(dataList.email || '');
            setPassword(dataList.password || '');
            if (dataList.user !== "User" && dataList.address) {
                setCity(dataList.address.city || '');
                setDistrict(dataList.address.district || '');
                setWards(dataList.address.wards || '');
                setSpecificAddress(dataList.address.specificAddress || '');
            } else {
                setCity('');
                setDistrict('');
                setWards('');
                setSpecificAddress('');
            }
        }
    };

    useEffect(() => {
        getListInformation();
    }, []);

    useEffect(() => {
        clickUpdate();
        if (route.params?.info !== undefined) {
            setInfo(route.params.info);
        }
    }, [dataList, route.params?.info]);

    const handleConfirmInfo = () => {
        setInfo(false);
        const address = new Address(city, district, wards, specificAddress);
        const userAuth = new UserAuth(idUserAuth, user, name, phone, email, password, address);
        moduleUserAuth.updateAuth(userAuth);
    };
    const fields = [
        { title: "Tên", value: name, onChangeText: (text) => setName(text) },
        { title: "Số điện thoại", value: phone, onChangeText: (text) => setPhone(text) },
        { title: "Email", value: email, onChangeText: (text) => setEmail(text) },
        { title: "Mật khẩu", value: password, onChangeText: (text) => setPassword(text) },
        //Nếu là User =[] ngược lại...
        ...(dataList && dataList.user !== '' && dataList.user !== "User" ? [
            { title: "Tỉnh/Thành phố", value: city, onChangeText: (text) => setCity(text) },
            { title: "Quận/Huyện", value: district, onChangeText: (text) => setDistrict(text) },
            { title: "Phường/Xã", value: wards, onChangeText: (text) => setWards(text) },
            { title: "Địa chỉ cụ thể", value: specificAddress, onChangeText: (text) => setSpecificAddress(text) }
        ] : [])
    ].filter(Boolean);
    return (
        <SafeAreaView style={styles.container}>
            {fields.map((field, index) => (
                <View key={index} style={styles.information}>
                    <InputInformation
                        title={field.title}
                        value={field.value}
                        editable={info}
                        onChangeText={field.onChangeText}
                    />
                </View>
            ))}
            {info && <ButtonConfirm title="Xác nhận" onPress={handleConfirmInfo} />}
        </SafeAreaView>
    )
}
export default AccountInformation;