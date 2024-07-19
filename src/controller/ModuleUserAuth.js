import { Alert } from "react-native";
import { child, push, ref, set, remove, update, onValue } from "firebase/database";
import { database, auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import ToastShow from "../components/ToastShow";
export default class ModuleUserAuth {

    constructor() {
        this.epl = [];
    }
    loginAuth(email, password, navigation) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.displayName === 'Manage') {
                    navigation.navigate('DrawerNavigator');
                }
                else {
                    navigation.navigate('BottomNavigator');
                }
                console.log('user', user);
                ToastShow({
                    type: 'success',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                    text1: 'Đăng nhập thành công!',
                    text2: 'Chào mừng bạn đến với Football.',
                    backgroundColor: '#8BED82',
                });
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                ToastShow({
                    type: 'error',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                    text1: 'Đăng nhập không thành công!',
                    text2: error.message,
                    backgroundColor: 'red',
                });
            });
    }

    registerAuth(userAuth) {
        try {
            createUserWithEmailAndPassword(auth, userAuth.email, userAuth.password)
                .then(async (userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    if (user) {
                        // Cập nhật displayName của người dùng
                        await updateProfile(user, {
                            displayName: userAuth.user
                        });
                        set(ref(database, 'UserAuth/' + user.uid), {
                            idUserAuth: user.uid,
                            user: user.displayName,
                            name: userAuth.name,
                            phone: userAuth.phone,
                            email: user.email,
                            password: userAuth.password,
                            address: userAuth.address,
                        }).then(() => {
                            console.log('User registered:', user);
                            ToastShow({
                                type: 'success',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                                text1: 'Đăng ký thành công!',
                                backgroundColor: '#8BED82',})
                        }).catch((error) => {
                                console.error(error);

                            });
                    }
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                    // ..
                });

        } catch (error) {
            console.log(error);
        }
    }
    updateAuth(userAuth) {
        try {
            update(ref(database, 'UserAuth/' + userAuth.idUserAuth), {
                name: userAuth.name,
                phone: userAuth.phone,
                email: userAuth.email,
                password: userAuth.password,
                address: userAuth.address,
            }).then(() => {
                ToastShow({
                    type: 'success',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                    text1: 'Cập nhật thành công!',
                    backgroundColor: '#8BED82',
                })
            }).catch((error) => {
                console.error(error);
            });
        } catch (error) {
            console.error(error);
        }
    }
}