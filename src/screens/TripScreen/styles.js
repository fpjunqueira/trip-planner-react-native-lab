import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    wrapperInfo: {
        flex: 1
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    itemPrice: {
        textAlign: 'right', 
        color: '#45B1ED', 
        fontWeight: 'bold'
    },
    wrapper: {
        flex: 1
    },
    header: {
        height: 190,
        backgroundColor: 'grey'
    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    tripName: {
        position: 'absolute',
        left: 16,
        bottom: 16
    },
    tripPrice: {
        position: 'absolute',
        bottom: 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#45B1ED',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
        color: 'white'
    },
    list: {
        flex: 1
    },
    contentList: {
        paddingTop: 16,
        paddingLeft: 16
    }
})

export default styles