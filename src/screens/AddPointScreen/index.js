import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import MapView, { Marker } from 'react-native-maps';

class AddPointScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        position: {
            latitude: 37.78825,
            longitude: -122.4324
        }, 
        pointName: '',
        description: '',
        price: 0
    }    
    render() {        
        return (
            <View style={styles.wrapper}>               
                <View style={styles.header}>
                    <MapView style={{flex: 1}} initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                        <Marker 
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324
                            }} 
                            onDragEnd={
                                (evt) => {
                                    console.log(evt.nativeEvent)
                                    this.setState({
                                        position: evt.nativeEvent.coordinate
                                    })
                                }
                            }
                            draggable
                        />
                    </MapView>
                </View>
                <TextInput style={styles.input} placeholder='Point Name' onChangeText={ txt => this.setState({ pointName: txt }) }/>
                <TextInput style={styles.input} placeholder='Description' onChangeText={ txt => this.setState({ description: txt }) }/>
                <TextInput style={styles.input} placeholder='Price' onChangeText={ txt => this.setState({ price: txt }) }/>
                <TouchableOpacity style={styles.btn}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>)       
    }
}

export default AddPointScreen