import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

class TripScreen extends Component {
    static navigationOptions = {
        header: null
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>                
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice} >
                        {item.item.price}
                    </Text>
                </View>
            </View>
        )
    }
    render() {
        const trip = {
            name: 'Eurotrip 2019',
            price: '$5000',
            places: [
                {
                    id: '1',
                    name: 'Amsterdam',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '1',
                    name: 'Eindhoven',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '3',
                    name: 'Bruxelas',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '4',
                    name: 'Londres',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '5',
                    name: 'Madri',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '6',
                    name: 'Berlin',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '7',
                    name: 'Amsterdam',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '8',
                    name: 'Eindhoven',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '9',
                    name: 'Bruxelas',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '10',
                    name: 'Londres',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '11',
                    name: 'Madri',
                    description: 'Arrive',
                    price: 1000,
                    lat: 0,
                    long: 0
                },
                {
                    id: '12',
                    name: 'Berlin',
                    description: 'Visit',
                    price: 1000,
                    lat: 0,
                    long: 0
                }
            ]
        }
        return (
            <View style={styles.wrapper}>               
                <View style={styles.header}>
                    <View style={styles.backButton}>                
                        <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                            <Image source={require('../../../assets/arrow-back.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>$5000</Text>
                </View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.contentList}
                    keyExtractor = { item => item.id }
                    data={trip.places}
                    renderItem={this.renderItem}
                    />
            </View>)       
    }
}

export default TripScreen