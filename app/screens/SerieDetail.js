import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { SerieDetails } from '../components/SerieDetails';
import { Header } from '../components/Header';
import { IconButton } from '../components/Button';


import styles from './styles';

class SerieDetail extends Component {
    state = {
        serie: ''
    };

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header title={`${navigation.getParam('serie').name}`} />,
        headerRight: <IconButton onPress={navigation.getParam('handleSave')} />
    });

    componentWillMount() {
        this.props.navigation.setParams({ handleSave: this.saveFavourite });
        this.setState({ serie: this.props.navigation.getParam('serie') })
    }

    saveFavourite = async () => {
        await AsyncStorage.setItem('favourites', JSON.stringify(this.state.serie))
            .then(() => {
                console.log('Success')
            })
            .catch(() => {
                console.log('Error')
            })
    };

    render() {
        const serie = this.props.navigation.getParam('serie');
        return (
            <View style={styles.container}>
                <SerieDetails {...this.state.serie} />
            </View>
        );
    }
}

export default SerieDetail;