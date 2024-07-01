import { Alert } from "react-native";
import { child, push, ref, set, remove, update, onValue } from "firebase/database";
import { database, auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
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
                console.log('user',user);
                Alert.alert('Đăng nhập thành công');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Đăng nhập không thành công');

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
                            // address: {
                            //     city: userAuth.address.city,
                            //     district: userAuth.address.district,
                            //     wards: userAuth.address.wards,
                            //     specificAddress: userAuth.address.specificAddress
                            // }
                        }).then(() => {
                            console.log('User registered:', user);
                            Alert.alert('Đăng ký thành công');
                        })
                            .catch((error) => {
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
}