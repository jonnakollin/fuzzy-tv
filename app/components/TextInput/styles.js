import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#4F6D7A',
    },
    border: {
        height: INPUT_HEIGHT,
        width: 1,
        backgroundColor: '#D3D3D3',
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: 'black'
    },
});

export default styles;