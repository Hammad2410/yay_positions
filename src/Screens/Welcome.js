import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header } from 'native-base';
import SplashScreen from 'react-native-splash-screen'

class Welcome extends React.Component {

    componentDidMount() {

        setTimeout(() => {
            SplashScreen.hide()
            this.props.navigation.navigate("CandidateHome")
        }, 3000)
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View>

                    </View>
                </Content>
            </Container>
        )
    }
}
export default Welcome;