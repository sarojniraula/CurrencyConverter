import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import home from '../screens/home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import colors from '../constants/colors';
import { ConversionContextProvider } from '../util/ConversionContext';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>

        <MainStack.Screen name="Home" component={home} options={{headerShown: false}} />
        <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
    <ModalStack.Navigator screenOptions={{presentation: 'modal'}}>
        <ModalStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
        />
        <ModalStack.Screen 
            name="CurrencyList" 
            component={CurrencyList} 
            options={({navigation, route}) => ({
                title: route.params && route.params.title,
                headerLeft: null,
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{paddingHorizontal: 10}}>
                        <Icon name="cross" size={30} color={colors.icon} />
                    </TouchableOpacity>
                ),
            })}
        />
    </ModalStack.Navigator>
)

export default () => (
    <NavigationContainer>
    <ConversionContextProvider>
        <ModalStackScreen />
    </ConversionContextProvider>
    </NavigationContainer>
);