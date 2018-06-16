import React, { Component } from 'react';
import { StatusBar, View, Image, AsyncStorage, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Favourites extends Component {
    state = {
        favourites: []
    }

    static navigationOptions = () => ({
        headerTitle: 'Favourites'
    });

    componentDidMount() {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, favourites) => {
                this.setState({ favourites })
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    barStyle="default"
                />
                {this.state.stores < 1 &&
                    <Image
                        style={styles.image}
                        source={require('./../images/calendar-icon.png')}
                        resizeMode="contain"
                    />
                }
                {this.state.favourites.length > 0 && this.state.favourites.map(item =>
                    <Text>{`${item[0]}:${item[1]}`}</Text>
                )}
            </View>
        );
    }
}

export default Favourites;