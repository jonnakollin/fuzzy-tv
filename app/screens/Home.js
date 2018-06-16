import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import { SearchInput } from '../components/Search';
import { Header } from '../components/Header';

import styles from './styles';

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header title="Fuzzy TV" handlePress={() => navigation.navigate('Favourites')} name="ios-heart" />
    });

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    barStyle="default"
                />
                <SearchInput />
            </View>
        );
    }
}

export default Home;
