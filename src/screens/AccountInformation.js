import React, { useState , useEffect} from "react";
import { SafeAreaView, View, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//components
import ButtonConfirm from "../components/ButtonConfirm";
import InputInformation from "../components/InputInformation";
//styles
import styles from "../styles/styles";
const AccountInformation = () => {
    const route = useRoute();
    // Lấy dữ liệu từ route.params
    const { info: initialInfo } = route.params ?? { info: false };
    const [info, setInfo] = useState(initialInfo);

    useEffect(() => {
        if (route.params?.info !== undefined) {
            setInfo(route.params.info);
        }
    }, [route.params?.info]);
    const handleConfirmInfo = () => {
        setInfo(false);
    };
    const fields = [
        { title: "Tài khoản"},
        { title: "Tên" },
        { title: "Số điện thoại" },
        { title: "Mật khẩu" },
        { title: "Địa chỉ" },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.information}>
                {fields.map((field, index) => (
                    <InputInformation
                        key={index}
                        title={field.title}
                        value={field.value}
                        editable={info}
                    />
                ))}
                {info && <ButtonConfirm title="Xác nhận" onPress={handleConfirmInfo} />}
            </View>
        </SafeAreaView>
    )
}
export default AccountInformation;