import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Informasi,
  InformasiDetail,
  Screening,
  ScreeningAdd,
  TentangKami,
  ScreeningDetail,
  ScreeningCek,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Home' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TentangKami" component={TentangKami} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InformasiDetail"
        component={InformasiDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Screening"
        component={Screening}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="ScreeningAdd"
        component={ScreeningAdd}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ScreeningDetail"
        component={ScreeningDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ScreeningCek"
        component={ScreeningCek}
        options={{
          headerShown: false,
        }}
      />








    </Stack.Navigator>
  );
}
