import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        backgroundColor: '#E2E2E2',
        width: 40,
        height: 60,
        marginRight: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    separator: {
        backgroundColor: '#E2E2E2',
        height: StyleSheet.hairlineWidth,
    }
});

export default styles;