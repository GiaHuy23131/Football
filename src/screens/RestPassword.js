import React,{useState} from "react";
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";
import ButtonBack from "../components/ButtonBack";


const RestPassword = () => {
    const route = useRoute();// route
    const {phone} = route.params;    // Lấy dữ liệu từ route.params
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');
    //check
    let notification;
    const checkNewPassword = () => {
        if(newPassword && newPassword.length <= 6){
            notification = "Dài thêm nữa"
            return false;
        }
    }
    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ButtonBack  />
                <Text style={styles.titleRegister}>Đặt Lại Mật Khẩu</Text>
                <Text style={{textAlign: 'center', fontSize: 20}}>Số điện thoại: {phone}</Text>
                <InputComponent
                    title="Mật khẩu mới"
                    keyboardType="default"
                    placeholder="Nhập mật khẩu mới"
                    error={checkNewPassword()}
                    notification={notification}
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                />
                <InputComponent
                    title="Nhập lại mật khẩu mới"
                    keyboardType="default"
                    placeholder="Nhập lại mật khẩu mới"
                    error={checkNewPassword()}
                    notification={notification}
                    value={newPasswordAgain}
                    onChangeText={(text) => setNewPasswordAgain(text)}
                />
                <ButtonConfirm
                onPress={() => handleRestPassword(phone)}
                    title="Xác nhận"
                />  

            </View>
        </TouchableWithoutFeedback>
    )
}
export default RestPassword;