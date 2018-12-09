import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
    state = {
        counter: 0,
    }
    handleCouter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return ( 
            <ImageBackground 
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch'}}
                style={styles.background}>
            
                <View style={styles.wrapperLogoTripPlanner}>
                    <Image source={assets.tripplanner}/>
                </View>
                <View style={styles.wrapperLogoPexper}>
                    <Image source={assets.pexperLogo}/>
                </View>
                <TouchableWithoutFeedback onPress={this.handleCouter}>
                    <View style={styles.buttonBackGround}>
                        <Text style={styles.buttonText}>START {this.state.counter}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>            
        )
    }
}

export default HomeScreen