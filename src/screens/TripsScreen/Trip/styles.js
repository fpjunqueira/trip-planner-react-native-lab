import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapperTrip: {
        backgroundColor: 'white',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    image: {
        backgroundColor: 'green',
        height: 144,
        marginBottom: 6
    },
    amount: {
        position: 'absolute',
        top: 144 - 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#45B1ED',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
        color: 'white'
    }

})

export default styles