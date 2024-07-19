import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles/styles';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
      <Toast />
    </View>
  );
}
