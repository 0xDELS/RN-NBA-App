import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

// SCREENS
import SignIn from './components/auth';
import Games from './components/games';
import News from './components/news';
import NewsArticle from './components/news/newsArticle';
import GamesArticle from './components/games/gameArticle';

import Logo from './utils/logo';

const headerConf = {
    headerLayoutPreset: 'center',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#001338'
        },
        headerTintColor: 'white',
        headerTitle:Logo
    }
}

const NewsStack = createStackNavigator({
    News:{
        screen: News
    },
    Article:{
        screen: NewsArticle
    }
}, headerConf);

const GamesStack = createStackNavigator({
    Games:{
        screen: Games
    },
    Article:{
        screen: GamesArticle
    }
}, headerConf);

const AppStack = createBottomTabNavigator({
    News:{
        screen: NewsStack
    },
    Games:{
        screen: GamesStack
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