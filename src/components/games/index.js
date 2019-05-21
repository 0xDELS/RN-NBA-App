import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { getGames } from '../../store/actions/gamesActions';
import Moment from 'moment';

class GamesComponent extends Component {

    componentDidMount(){
        this.props.dispatch(getGames());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>GamesComponent</Text>
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

function mapStateToProps(state){
    console.log(state)
    return {
        Games: state.Games
    }
}

export default connect(mapStateToProps)(GamesComponent);