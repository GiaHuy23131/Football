import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
//Screens
import Home from '../screens/Home';
const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen  name="Home" component={Home} options={{
                tabBarLabel: "Trang Chủ",
                tabBarIcon: () => {
                    return(
                        <Icon name="home" size={30} color="#000000" />
                    )
                }
            }} />
        </Tab.Navigator>
    )

}
export default BottomNavigator;