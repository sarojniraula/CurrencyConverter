import React from 'react';
import {  SafeAreaView, ScrollView, Linking, Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import colors from '../constants/colors'
import {RowItem, SafeView, RowSeparator} from '../components/rowitem'

const openUrl = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong.', 'Please try again later.')
    })
}

export default () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <ScrollView>
            <SafeView />
            <RowItem
                title="Themes"
                onPress={() => alert("todo!")}
                rightIcon={
                    <Icon name ="chevron-right" size={20} color={colors.icon} />
                }                    
            />

            <RowSeparator />

            <RowItem
                title="React Native Basics"
                onPress={() => openUrl('https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter')}
                rightIcon={
                    <Icon name="export" size={20} color={colors.icon} />
                }
            />

            <RowSeparator />

            <RowItem
                title="React Native By Example"
                onPress={() => openUrl('https://reactnativebyexample.com')}
                rightIcon={
                    <Icon name ="export" size={20} color={colors.icon} />
                }
            />
            </ScrollView>
        </SafeAreaView>
    )
}