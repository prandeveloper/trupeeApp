import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';

const MemberPlan = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.textView}>
          <Text style={styles.oneText}>Select Package to Activate Service</Text>
        </View>
        <View style={styles.textView}>
          <ScrollView horizontal={true}>
            <View>
              <View style={[styles.card, {backgroundColor: '#c0d4a3'}]}>
                <Text style={styles.textcard}>1 Month</Text>
                <Text style={styles.textcard}>₹ 1999</Text>
                <Text style={styles.textcard}>₹ 1999</Text>
                <Text style={styles.offText}>30% OFF</Text>
              </View>
            </View>
            <View>
              <View style={[styles.card, {backgroundColor: '#ADD8E6'}]}>
                <Text style={styles.textcard}>3 Month</Text>
                <Text style={styles.textcard}>₹ 5999</Text>
                <Text style={styles.textcard}>₹ 1999</Text>
                <Text style={styles.offText}>60% OFF</Text>
              </View>
            </View>
            <View>
              <View style={[styles.card, {backgroundColor: '#00b0503'}]}>
                <Text style={styles.textcard}>6 Month</Text>
                <Text style={styles.textcard}>₹ 8999</Text>
                <Text style={styles.textcard}>₹ 1999</Text>
                <Text style={styles.offText}>90% OFF</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MemberPlan;

const styles = StyleSheet.create({
  textView: {
    margin: 5,
  },
  oneText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  textcard: {
    fontWeight: '600',
    color: 'black',
  },
  offText: {
    backgroundColor: '#a82682',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
