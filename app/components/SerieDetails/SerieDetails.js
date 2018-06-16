import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const SerieDetails = ({name, summary, genres, premiered, rating, schedule}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.contentContainer}>
                {genres.map((genre, index) => (
                    <Text style={styles.genre} key={index}>{genre}</Text>
                ))}
            </View >
            <Text style={styles.summary}>{summary}</Text>
            <Text style={styles.schedule}>{Object.values(schedule)}</Text>
        </View >
    );
}

SerieDetails.defaultProps = {
    genres: [],
    schedule: {}
}

export default SerieDetails;