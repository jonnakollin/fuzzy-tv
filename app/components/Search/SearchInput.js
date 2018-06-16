import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { InputWithButton } from '../TextInput';
import { ListItem, Separator } from '../List';

import styles from './styles';

class SearchInput extends Component {
    state = {
        query: '',
        data: [],
    }

    handleSearch = (event) => {
        this.setState({ query: event.nativeEvent.text });

        axios.get('http://api.tvmaze.com/search/shows?q=' + this.state.query)
            .then(response => {
                const data = response.data;
                this.setState({ data })
            })
            .catch(error => {
                console.log(error);
            });
    }

    handlePress = (e, item) => {
        this.props.navigation.navigate('Details', { serie: item });
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <InputWithButton
                    buttonText={<Ionicons name="ios-search-outline" size={30} />}
                    placeholder="Pls enter your fav serie"
                    onPress={this.handleSearch}
                    onSubmitEditing={this.handleSearch}
                    value={this.state.query}
                    onChangeText={(input) => this.setState({ query: input })}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item.show.name}
                            onPress={(e) => this.handlePress(e, item.show)}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default withNavigation(SearchInput);