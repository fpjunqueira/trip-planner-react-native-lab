import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styles from './styles';

const Trip = props => {
    const dimensions = Dimensions.get('window')
    return(        
        <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
            <View style={[styles.image, {width: dimensions.width - 32}]}>
                <Text>Image</Text>
            </View>
            <Text>{props.title}</Text>
            <Text style={styles.amount}>{props.price}</Text>
        </TouchableOpacity>
    )
}

export default Trip