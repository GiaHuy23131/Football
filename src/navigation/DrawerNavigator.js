import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
//Screens
import OrderProcessing from '../screens/OrderProcessing';
import FootballFieldManagement from '../screens/FootballFieldManagement';
//components
import CustomDrawerContent from '../components/CustomDrawerContent';
//firebase
import { auth } from '../firebase/firebaseConfig';

const Drawer = createDrawerNavigator();

const screenOptions = (title, iconName) => ({
    drawerLabel: title,
    title: title,
    drawerIcon: ({ color, size }) => (
        <Icon name={iconName} color={color} size={size} />
    ),
    drawerLabelStyle: { fontWeight: 'bold' },
    drawerItemStyle: { marginVertical: 5 },
    drawerActiveTintColor: '#8BED82',
    drawerInactiveTintColor: '#000',
    drawerActiveBackgroundColor: '#f1f1f1',
    headerTitleAlign: 'center',  // Đưa tiêu đề vào giữa
    drawerInactiveBackgroundColor: '#fff',
    headerShown: true,
});
const DrawerNavigator = () => {
    const user = auth.currentUser;  // Lấy thông tin người dùng hiện tại
    return (
        <Drawer.Navigator drawerContent={(props) => 
        <CustomDrawerContent {...props} user={user}/>} screenOptions={{headerStyle: {backgroundColor: '#F5F5F5'}}} >
            <Drawer.Screen
                name="OrderProcessing"
                component={OrderProcessing}
                options={screenOptions('Xử lý đặt sân', 'clipboard')}
            />
            <Drawer.Screen
                name="FootballFieldManagement"
                component={FootballFieldManagement}
                options={screenOptions('Quản lý sân bóng', 'futbol-o')}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;