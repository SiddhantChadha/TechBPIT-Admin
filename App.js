import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/components/DrawerNavigation';
import Navbar from './src/components/Navbar.web';
import { Platform } from 'react-native';
import { View} from "react-native";

export default function App() {
  return (
    
    <NavigationContainer>

      {(Platform.OS==='web')?
      (
      <View style={{width: '100%'}}>
      <Navbar height="8%"/>
      <DrawerNavigation height="92%"/>
      </View>
      ):
      <DrawerNavigation />}
    </NavigationContainer>
  );
}


