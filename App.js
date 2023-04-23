import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/components/DrawerNavigation';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar /> 
      <DrawerNavigation />
    </NavigationContainer>
  );
}


