import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import Register from '../screens/Register';
import Logins from '../screens/Logins';
import Address from '../screens/Address';
import ForgotPassword from '../screens/FotgotPassword';
import RestPassword from '../screens/RestPassword';
import VerificationOTP from '../screens/VerificationOTP';
const Stack = createStackNavigator();
function BottomNavigator() { 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown : false}}>
                <Stack.Screen name='Login' component={Logins} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Address' component={Address} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='RestPassword' component={RestPassword} />
                <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default BottomNavigator;