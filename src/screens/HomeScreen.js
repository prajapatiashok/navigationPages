import React,{ useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import temperatureApi from '../api/temperatureApi';
import * as addData from '../JsonData/data'

const HomeScreeen = ({navigation}) => {
    const [responseJsonData, setResponseJsonData] = useState([]);
    const sortedData = responseJsonData.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
    useEffect(() => {
        temperatureApi.get().then((response) => {
            let responseData = [];
            responseData.push(...response.data.data, ...addData.additionalData);
            setResponseJsonData(responseData)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <View>
            <FlatList
                data={sortedData}
                keyExtractor={item => item.index.toString()}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate('Detail',{ monthName: item.month === 'Jan' ? "January": item.month, degree: item.temperature.value})}}>
                            <View style={styles.listStyle}>
                                <Text style={styles.textStyle}>{item.index}. {item.month === 'Jan' ? "January": item.month}</Text> 
                                <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> {item.temperature.value}</Text>
                                <Text style={styles.textStyle}> deg {item.temperature.unit}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        flexDirection: 'row',
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingVertical: 10
    },
    textStyle: {
        fontSize: 17
    }
});

HomeScreeen.navigationOptions = ({navigation}) => ({
    title: "Monthly Temperature",
    headerTitleStyle: { alignSelf: 'center' }
})

export default HomeScreeen;

