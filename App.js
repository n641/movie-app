import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

import HomeScreen from './Screens/Home/HomeScreen';
import Seacrh from './Screens/Home/Seacrh';
import Categories from './Screens/Home/Caregory/Categories';
import Results from './Screens/Home/Caregory/Results';
import DetailsScreen from './Screens/Home/DetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Seacrh"
          component={Seacrh}
          options={{
            title: 'Search',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Results"
          component={Results}
          options={{
            title: 'Result',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

