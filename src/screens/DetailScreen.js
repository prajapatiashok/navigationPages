import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const DetailScreen = ({navigation}) => {
    const degree = navigation.getParam('degree')
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{degree}</Text>
        </View>
    );
}

DetailScreen.navigationOptions = ({navigation}) => {
    const monthName = navigation.getParam('monthName')
    
    return {
        title: monthName,
        headerTitleStyle: { alignSelf: 'center' }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default DetailScreen;

