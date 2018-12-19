import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import styles from './styles'

class AddTripScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        trip: ''
    }
    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0
        }
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if (tripsAS) {
            trips = JSON.parse(tripsAS)
        }
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        this.props.navigation.navigate('AddPoint', { id: trip.id })
    }   
    render() {        
        return (
            <View style={styles.wrapper}> 
                <TextInput style={styles.input} placeholder='Trip' onChangeText={ txt => this.setState({ trip : txt }) }/>
                <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
                    <Text>Save Trip</Text>
                </TouchableOpacity>
            </View>)       
    }
}

export default AddTripScreen