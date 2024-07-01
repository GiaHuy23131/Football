import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
//Screens
import OrderProcessing from '../screens/OrderProcessing';
import AccountInformation from '../screens/AccountInformation';
//components
import CustomDrawerContent from '../components/CustomDrawerContent';
//firebase
import { auth } from '../firebase/firebaseConfig';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const user = auth.currentUser;  // Lấy thông tin người dùng hiện tại
    return (
        <Drawer.Navigator drawerContent={(props) => 
        <CustomDrawerContent {...props} user={user}
        />}>
            <Drawer.Screen
                name="OrderProcessing"
                component={OrderProcessing}
                options={{
                    drawerLabel: 'Xử lý đặt sân',
                    title: 'Xử lý đặt sân',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="clipboard" color={color} size={size} />
                    ),
                    drawerLabelStyle: { fontWeight: 'bold' },
                    drawerItemStyle: { marginVertical: 5 },
                    drawerActiveTintColor: '#e91e63',
                    drawerInactiveTintColor: '#000',
                    drawerActiveBackgroundColor: '#f1f1f1',
                    drawerInactiveBackgroundColor: '#fff',
                    headerShown: true,
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;