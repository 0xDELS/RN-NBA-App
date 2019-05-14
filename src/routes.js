import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

// SCREENS
import SignIn from './components/auth';
import Games from './components/games';
import News from './components/news';

const AppStack = createBottomTabNavigator({
    News:{
        screen: News
    },
    Games:{
        screen: Games
    }
});

const AuthStack = createStackNavigator({
    SignIn:{
        screen: SignIn
    }
},{
    headerMode: 'none'
});

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth: AuthStack
    },{
        initialRouteName:'Auth'
    }))
}