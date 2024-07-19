import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Nền xám sáng cho toàn bộ màn hình
        justifyContent: 'center',
        padding: 10,
    },
    container1: {
        marginBottom: 'auto',
    },
    title: {
        fontSize: 60,
        color: '#333333', // Màu xám đậm cho tiêu đề
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#8BED82',
    },
    footerView: {
        marginTop: '8%',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#1E90FF', // Màu xanh dương cho liên kết quên mật khẩu
        marginBottom: 10,
        fontSize: 16,
    },
    registerView: {
        flexDirection: 'row',
    },
    registerText: {
        color: '#666666', // Màu xám vừa cho văn bản đăng ký
        fontSize: 16,
    },
    registerButtonText: {
        color: '#1E90FF', // Màu xanh dương cho liên kết đăng ký
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#666666', // Màu xám vừa cho phụ đề
        marginLeft: '70%',
        marginBottom: 30,
    },
    titleRegister: {
        fontSize: 70,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8BED82',
    },
    inputView: {
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333333', // Màu chữ xám đậm
    },
    titleInput: {
        fontSize: 16,
        color: '#333333', // Màu xám đậm cho tiêu đề
        fontWeight: '600', // Định dạng chữ nửa đậm cho tiêu đề
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // Nền trắng cho ô nhập liệu
        borderRadius: 10,
        borderColor: '#DDDDDD', // Màu viền xám nhạt
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        shadowColor: '#000000', // Màu bóng của ô nhập liệu
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        height: 50,
        width: '100%',
    },
    inputDescription: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF', // Nền trắng cho ô nhập liệu
        borderRadius: 10,
        borderColor: '#DDDDDD', // Màu viền xám nhạt
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        shadowColor: '#000000', // Màu bóng của ô nhập liệu
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        height: 80,
        width: '100%',
    },
    errorIcon: {
        marginLeft: 10,
    },
    error: {
        fontSize: 14,
        color: 'red',
        marginTop: 5,
    },
    button: {
        fontSize: 18,
        backgroundColor: '#8BED82',
        height: 50,
        width: '50%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        marginTop: 15,
    },
    buttonDown: {
        fontSize: 18,
        backgroundColor: '#8BED82',
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        marginTop: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
    },
    registerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20%',
    },
    forgotPasswordView: {
        marginTop: '10%',
        alignItems: 'center',
    },
    buttonView: {
        margin: 10,
        alignItems: 'center',
    },
    buttonView2: {
        margin: 10,
        marginTop: 'auto',
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    buttonBackView: {
    },
    buttonBack: {
        marginLeft: '1%',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    imageHome: {
        width: '100%',
        height: 150,
    },
    information: {
        marginTop: '5%',
    },
    logout: {
        padding: 10,
        backgroundColor: '#8BED82',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        flexDirection: 'row',  // Giúp thêm biểu tượng dễ dàng
        justifyContent: 'center',  // Đảm bảo nội dung được căn giữa
    },
    content: {
        flex: 0.8,
    },
    content1: {
        flex: 1,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: '5%',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 10,
    },
    userContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    viewFlatList: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        borderColor: '#d4f3e2',
        borderWidth: 2,
    },
    infoContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    fieldName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    fieldtext: {
        fontSize: 14,
        marginTop: 20,
    },

    deleteButton: {
        marginTop: 'auto',
        alignItems: 'flex-end',
    },


});
export default styles;