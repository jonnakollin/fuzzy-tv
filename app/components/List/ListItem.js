import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({ text, selected, onPress  }) => (
    <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
            <View style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
};

ListItem.defaultProps = {
    selected: false,
}

export default ListItem;