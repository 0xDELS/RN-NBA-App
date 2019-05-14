import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class NewsComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewsComponent</Text>
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

export default NewsComponent;