import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';

import AuthLogo from './authLogo';

class AuthComponent extends Component {

    state = {
        loading: false
    }

    render() {
        if(this.state.loading){
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                </View>
            )
        }else{
            return (
                <ScrollView style={styles.container}>
                    <View>
                        <AuthLogo/>
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#1d428a',
        padding: 50
    },
});

export default AuthComponent;