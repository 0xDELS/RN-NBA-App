import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class GameArticleComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>GameArticleComponent</Text>
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

export default GameArticleComponent;