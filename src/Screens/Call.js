import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
// import Daily, { DailyMediaView, DailyEvent } from '@daily-co/react-native-daily-js';
import { WebView } from 'react-native-webview';
const Call = (props) => {

    return (
        <WebView source={{ uri: 'https://hiring.daily.co/room1003' }} onNavigationStateChange={(state) => {
            console.log(state)
        }} />
    )
}

export default Call;