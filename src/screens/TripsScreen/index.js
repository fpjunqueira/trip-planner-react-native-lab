import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import Trip from './Trip'
import isIphoneX from '../../utils/IsIphoneX'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class TripsScreen extends Component {
    static navigationOptions = {
        header: null
    }
    renderItem = item => {
        console.log(item)
        return <Trip onPress={ () => this.props.navigation.navigate('Trip') } title={item.item.name} price={item.item.price}/>
    }
    render() {
        const trips = [
            { id: '1', name: 'EuroTripo 2019', price: '$5000' },
            { id: '2', name: 'Machu Picchu 2020', price: '$4500' },
            { id: '3', name: 'Vancouver 2019', price: '$3000' },
            { id: '4', name: 'Thailand 2021', price: '$6000' }
        ]
        return(
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>      
                <View style={{
                    flex: 1
                }}>
                    <MapView
                        style={{
                            flex: 1
                        }}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    />
                    <TouchableOpacity 
                        onPress={
                            () => this.props.navigation.navigate('AddTrip')
                        }
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 20
                        }}>
                        <Image source={require('../../../assets/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: 'white'
                }}>
                    <FlatList
                        data= {trips}
                        renderItem={this.renderItem}
                        horizontal
                        pagingEnabled
                        keyExtractor={ item => item.id }
                        style={[
                            isIphoneX() ? { marginBottom: 20 } : null
                        ]}
                    />
                </View>      
            </View>
        )
    }
}

export default TripsScreen