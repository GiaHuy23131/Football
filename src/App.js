import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import styles from './styles/styles';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
}
