import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { getNews } from '../../store/actions/newsActions';

import Moment from 'moment';

class NewsComponent extends Component {

    componentDidMount(){
        this.props.dispatch(getNews());
        console.log(this.props)
    }

    renderArticle = (news) => (
        news.articles ? 
            news.articles.map((article, i) => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Article',{
                        ...article
                    })}
                    key={i}
                >
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                                style={{height: 150, justifyContent: 'space-around'}}
                                source={{uri: article.image}}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.contentCard}>
                            <Text style={styles.titleCard}>{article.title}</Text>
                            <View style={styles.bottomCard}>
                                <Text style={styles.bottomCardTeam}>{article.team} - </Text>
                                <Text style={styles.bottomCardDate}>Posted at {Moment(article.date).format('d MMMM')}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        :
            <ActivityIndicator/>
    )

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f0f0f0'}}>
                { this.renderArticle(this.props.News) }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        shadowColor: '#dddddd',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2
    },
    contentCard:{
        borderWidth: 1,
        borderColor:'#dddddd'
    },
    titleCard:{
        color: '#232323',
        fontSize: 16,
        padding: 10
    },
    bottomCard:{
        flex: 1,
        flexDirection: 'row',
        borderTopWidth:1,
        borderTopColor: '#e6e6e6',
        padding: 10
    },
    bottomCardTeam:{
        color: '#828282',
        fontSize: 12
    },
    bottomCardDate:{
        color: '#828282',
        fontSize: 12
    }
});

function mapStateToProps(state){
    console.log(state)
    return {
        News: state.News
    }
}

export default connect(mapStateToProps)(NewsComponent);