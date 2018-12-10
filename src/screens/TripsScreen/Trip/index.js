import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from './styles';

const Trip = props => {
    const dimensions = Dimensions.get('window')
    return(        
        <View style={styles.wrapperTrip}>
            <View style={[styles.image, {width: dimensions.width - 32}]}>
                <Text>Image</Text>
            </View>
            <Text>{props.title}</Text>
            <Text style={styles.amount}>{props.price}</Text>
        </View>
    )
}

export default Trip