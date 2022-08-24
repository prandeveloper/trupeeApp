//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// create a component
const Feedback = () => {
    return (
       <View style={styles.container}>
         <ScrollView >
            <Text style={styles.txt} >General Support & Feedback</Text>
            <View style={styles.btnRow} >
                <TouchableOpacity style={[styles.btn]} >
                    <Text style={[styles.btnTxt, { color: 'red' }]}>Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { marginLeft: 25 }]}>
                    <Text style={[styles.btnTxt, { color: '#333' }]}>Report Bugs</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
                <TextInput
                style={[styles.input,{height:150,paddingVertical:10,textAlignVertical:'top'}]}
                placeholder={'Your feedback here'}
                multiline={true}
                 />
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.txtBotoom} >if you have someting to say that does not fit here,please send us an email at <Text style={{color:'blue'}}>support@tradzoo.com</Text></Text>
            </View>
        </ScrollView>
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    txt: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
    },
    btnRow: {
        flexDirection: 'row',
        display: 'flex',
        marginTop: 15,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#333',
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: '500'
    },
    input:{
        width:'100%',
        height:50,
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:10
    },
    txtBotoom:{
        color:'black',
        fontSize:15,
    }
});

//make this component available to the app
export default Feedback;
