import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        show:  true,
    }
    handleCouter = () => {
        this.setState({
            show: !this.state.show 
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

                {
                    !this.state.show ? 
                        <TouchableWithoutFeedback onPress={this.handleCouter}>
                            <View style={styles.buttonBackGround}>
                                <Text style={styles.buttonText}>START!</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    : 
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
                        <View style={styles.buttonEmptyStateBackGround}>
                            <Image source={assets.pin} style={styles.pin}/>
                            <Text style={styles.buttonEmptyStateText}>Let's planning your first trip?</Text>
                            <Image source={assets.arrowNext} style={styles.arrow}/>
                        </View>
                    </TouchableWithoutFeedback>
                }

            </ImageBackground>            
        )
    }
}

export default HomeScreen