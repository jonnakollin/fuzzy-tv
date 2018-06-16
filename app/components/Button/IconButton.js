import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const IconButton = (props) => {
    return(
        <TouchableHighlight onPress={props.onPress} >
             <Ionicons name="ios-heart-outline" size={32} />
        </TouchableHighlight >
    );
}

export default IconButton;