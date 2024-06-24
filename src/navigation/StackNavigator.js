import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
//Screens
import Register from '../screens/Register';
import Logins from '../screens/Logins';
import Address from '../screens/Address';
import ForgotPassword from '../screens/FotgotPassword';
import RestPassword from '../screens/RestPassword';
const Stack = createStackNavigator();
function StackNavigator() { 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown : false}}>
                <Stack.Screen name='Login' component={Logins} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Address' component={Address} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='RestPassword' component={RestPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default StackNavigator;