import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Header = ({ handlePress, name, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableHighlight onPress={handlePress}>
                <Ionicons style={styles.icon} name={name} size={32} />
            </TouchableHighlight>
        </View>
    );
}

export default Header;