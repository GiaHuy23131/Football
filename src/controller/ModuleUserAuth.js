import React, { useState } from "react";
import { Alert } from "react-native";
import { child, push, ref, set, remove, update } from "firebase/database";
import { database, auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export default class ModuleUserAuth {
    constructor() {
        this.epl = [];
    }
    loginAuth(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Alert.alert('Đăng nhập thành công');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    registerAuth(userAuth) {
        try {
            createUserWithEmailAndPassword(auth, userAuth.email, userAuth.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('User registered:', user);
                    if (user) {
                        set(ref(database, 'UserAuth/' + user.uid), {
                            idUserAuth: user.uid,
                            user: userAuth.user,
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