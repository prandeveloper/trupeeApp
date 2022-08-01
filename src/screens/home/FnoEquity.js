import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FnoEquity = () => {
  return (
    <View>
      <ScrollView>
        <View style={{borderBottomWidth: 3}}>
          {/* <================TOP Area=============> */}

          <View style={styles.bgarea}>
            <Text style={styles.bgText}>Intraday or BTST</Text>
          </View>

          {/* <================BUY Area=============> */}

          <View style={styles.bgarea2}>
            <Text style={styles.buy}>BUY</Text>
            <Text style={styles.notbuy}>MCDOWELL -N 830CE @ 19-20</Text>
          </View>

          {/* <================Circle Area=============> */}

          <View style={styles.bgarea2}>
            <View style={styles.circle1}>
              <Text style={styles.notbuy1}>SL{'\n'}10</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
          </View>

          {/* <================Botton Area=============> */}
          <View style={styles.bgarea2}>
            <View style={styles.botomview1}>
              <Text style={styles.bottomText}>Quality & investment Amount</Text>
              <Text style={styles.bottomText1}>1 Lots(625 Qty) = ₹118000</Text>
            </View>
            <View style={styles.botomview2}>
              <Text style={styles.bottomText}>P&L</Text>
              <Text style={styles.bottomText1}>₹ -0000 - 00.00%</Text>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth: 3}}>
          {/* <================TOP Area=============> */}

          <View style={styles.bgarea}>
            <Text style={styles.bgText}>Intraday or BTST</Text>
          </View>

          {/* <================BUY Area=============> */}

          <View style={styles.bgarea2}>
            <Text style={styles.buy}>BUY</Text>
            <Text style={styles.notbuy}>MCDOWELL -N 830CE @ 19-20</Text>
          </View>

          {/* <================Circle Area=============> */}

          <View style={styles.bgarea2}>
            <View style={styles.circle1}>
              <Text style={styles.notbuy1}>SL{'\n'}10</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.notbuy}>T₹ 1{'\n'}24</Text>
            </View>
          </View>

          {/* <================Botton Area=============> */}
          <View style={styles.bgarea2}>
            <View style={styles.botomview1}>
              <Text style={styles.bottomText}>Quality & investment Amount</Text>
              <Text style={styles.bottomText1}>1 Lots(625 Qty) = ₹118000</Text>
            </View>
            <View style={styles.botomview2}>
              <Text style={styles.bottomText}>P&L</Text>
              <Text style={styles.bottomText1}>₹ -0000 - 00.00%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FnoEquity;

const styles = StyleSheet.create({
  bgarea: {
    margin: 5,
  },
  bgText: {
    backgroundColor: '#a82682',
    width: 150,
    color: '#fff',
    padding: 5,
    fontWeight: '500',
  },
  bgarea2: {
    flex: 1,
    margin: 3,
    flexDirection: 'row',
    marginVertical: 5,
  },
  buy: {
    backgroundColor: '#00b050',
    width: 40,
    color: '#000',
    padding: 3,
    fontWeight: '500',
  },
  notbuy1: {
    color: '#000',
    paddingHorizontal: 6,
    fontWeight: '600',
  },
  notbuy: {
    color: '#000',
    padding: 3,
    fontWeight: '600',
  },
  circle1: {
    margin: 2,
    borderWidth: 1,
    backgroundColor: '#FA8072',
    borderRadius: 50,
    padding: 14,
  },
  circle: {
    margin: 2,
    borderWidth: 0,
    backgroundColor: '#c0d4a3',
    borderRadius: 50,
    padding: 14,
  },
  botomview1: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  botomview2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  bottomText: {
    color: '#000',
    fontWeight: '500',
  },
  bottomText1: {
    color: '#000',
  },
});
