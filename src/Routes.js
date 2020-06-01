import React from 'react'
import { StatusBar } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './screens/home'
import AccountScreen from './screens/account'
import FavoteScreen from './screens/favorite'
import PromoScreen from './screens/promo'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const icons = 
{

    Home: {
        name: 'home'
    },

    Promoção: {
        name: 'star'
    },

    Favoritos: {
        name: 'heart',
    },

    Config: {
        name: 'settings'
    },

}

const Tab = createBottomTabNavigator()

export default () => {
    return(
        <NavigationContainer>
            <StatusBar barStyle='light-content' />
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ size, color }) => {
                        
                        const { name } = icons[route.name]
                        return <MaterialCommunityIcons name={name} size={size} color={color} />;
                    }
                })}
                tabBarOptions={{
                    style: {
                        backgroundColor: '#131418',
                        borderTopColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    activeTintColor: '#7159c1',
                    inactiveTintColor: '#92929c',
                }}
            >
                <Tab.Screen 
                    name='Favoritos' 
                    component={FavoteScreen}
                />
                <Tab.Screen 
                    name='Promoção' 
                    component={PromoScreen}
                />
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen}
                />
                <Tab.Screen 
                    name='Config' 
                    component={AccountScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}