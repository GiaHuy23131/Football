import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BED82',
    },
    title: {
        fontSize: 70,
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginTop: '30%',
        textAlign: 'center',
    },
    title2: {
        marginLeft: '50%',
        fontSize: 30,
    },
    titleRegister: {
        fontSize: 70,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputView: {
        margin: 10,
    },
    textInput: {
        marginLeft: 5,
        fontSize: 18,
        flex: 1,
    },
    titleInput: {
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    inputDescription: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 80,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    errorIcon: {
        marginLeft: 'auto',
    },
    error: {
        color: 'red',
    },
    button: {
        fontSize: 18,
        backgroundColor: '#D9D9D9',
        height: 50,
        width: '50%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        marginTop: 15,
    },
    buttonDown: {
        fontSize: 18,
        backgroundColor: '#D9D9D9',
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
        paddingBottom: 100,
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
        backgroundColor: '#D9D9D9',
        justifyContent: 'flex-end',  // Đưa nút logout xuống dưới cùng
    },
    content: {
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
    },

});
export default styles;