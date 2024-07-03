import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//Screens
import Register from '../screens/Register';
import Logins from '../screens/Logins';
import ForgotPassword from '../screens/FotgotPassword';
import RestPassword from '../screens/RestPassword';
import VerificationOTP from '../screens/VerificationOTP';
import BottomNavigator from './BottomNavigator';
import DrawerNavigator from './DrawerNavigator';
import AccountInformation from '../screens/AccountInformation';
import FootballPitches from '../screens/FootballPitches';
//import {Register, Logins, Address, ForgotPassword, RestPassword, VerificationOTP} from '../screens/';
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Logins} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='RestPassword' component={RestPassword} />
                <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
                <Stack.Screen name='BottomNavigator' component={BottomNavigator} />
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
                <Stack.Screen name='AccountInformation'
                    component={AccountInformation}

                    options={({ navigation }) => ({
                        headerShown: true,
                        title: "Thông tin tài khoản",
                        headerRight: () => (
                            <Icon
                                name="edit"
                                size={30}
                                color="black"
                                style={{ marginRight: 15 }}
                                onPress={() => navigation.navigate('AccountInformation', { info: true })} // Thay đổi điều hướng tại đây
                            />
                        ),
                    })}
                />
                <Stack.Screen name='FootballPitches' component={FootballPitches} options={() => ({headerShown: true})} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default StackNavigator;