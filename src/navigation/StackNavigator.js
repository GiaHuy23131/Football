import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
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
import FootballFieldManagement from '../screens/FootballFieldManagement';
import FootballFieldDetails from '../screens/FootballFieldDetails';
//import {Register, Logins, Address, ForgotPassword, RestPassword, VerificationOTP} from '../screens/';
const Stack = createStackNavigator();

const IconBack = (navigation, title) => ({
    headerShown: true,
    title: title,
    headerTitleAlign: 'center',  // Đưa tiêu đề vào giữa
    headerLeft: () => (
        <IconFeather
            name="arrow-left"
            size={30}
            color="#8BED82"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />
    ),
});

const IconHeaderRight = (title, nameIcon, onPress) => ({
    headerShown: true,
    title: title,
    headerRight: () => (
        <Icon
            name={nameIcon}
            size={30}
            color="black"
            style={{ marginRight: 15 }}
            onPress={onPress} // Thay đổi điều hướng tại đây
        />
    ),
});

const StackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerStyle: { backgroundColor: '#F5F5F5' }, headerShown: false }}>
                <Stack.Screen name='Login' component={Logins} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='RestPassword' component={RestPassword} />
                <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
                <Stack.Screen name='BottomNavigator' component={BottomNavigator} />
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
                <Stack.Screen
                    name="AccountInformation"
                    component={AccountInformation}
                    options={({ navigation }) => ({
                        // Kết hợp các cấu hình từ cả hai hàm
                        ...IconBack(navigation, "Thông tin Tài khoản"),
                        ...IconHeaderRight("Thông tin Tài khoản","edit", 
                            () => navigation.navigate('AccountInformation', { info: true })),
                    })}
                />
                <Stack.Screen name='FootballPitches' component={FootballPitches} 
                options={({ navigation }) => IconBack(navigation, "Sân bóng đá")} />
                <Stack.Screen name='FootballFieldManagement' component={FootballFieldManagement} 
                options={() => ({ headerShown: true })} />
                <Stack.Screen name='FootballFieldDetails' component={FootballFieldDetails} 
                options={() => ({ headerShown: true })} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default StackNavigator;