import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//Components
import InputComponent from "../components/InputComponents";
import ButtonConfirm from "../components/ButtonConfirm";


const Logins = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation

    return (
        //Close keyborad
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Đăng Nhập</Text>
                <Text style={styles.title2}>Sân bóng</Text>
                <InputComponent
                    title="Tài khoản"
                    placeholder="Nhập tài khoản"
                />
                <InputComponent
                    title="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                />
                <ButtonConfirm
                    title="Xác nhận"
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

            </View>
        </TouchableWithoutFeedback>
    )
}
export default Logins;