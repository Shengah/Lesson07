import React from 'react';
import {View, Text} from 'react-native';


const Exercise1 = () => {
    return (
        <View style={{marginTop: 30}}>
            <Text style={{fontSize:30}}>Exercise 1</Text>
            <Text style={{fontSize: 24, marginTop: 5}}>RP Values</Text>
            <Text style={{color:'green', marginTop: 5}}>Excellence</Text>
            <Text style={{backgroundColor:'yellow', marginTop: 5}}>Customer-Centric</Text>
            <Text style={{fontStyle: 'italic', marginTop: 5}}>Integrity</Text>
            <Text style={{textAlign:"center", marginTop: 5}}>Teamwork</Text>
            <Text style={{backgroundColor:"black",color:"white", marginTop: 5}}>Enterprising</Text>
        </View>
    );
};

export default Exercise1;

