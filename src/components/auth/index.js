import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class AuthComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AuthComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
});

export default AuthComponent;