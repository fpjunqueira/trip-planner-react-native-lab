import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Trip from './Trip'
import IsIphoneX from '../../utils/IsIphoneX'

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
                    backgroundColor: 'red',
                    flex: 1
                }}>
                    <Text>Map</Text>
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