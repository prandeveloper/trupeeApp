import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const PremiumPaid = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 15}}>
          <Text style={styles.head}>Premium / paid Services included:</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>By 8:40 am Update of Market Trend</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                By 8:45 am NIFTY50 & BANKNIFTY Range
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                By 8:55 am NIFTY50 & BANKNIFTY Support -Resistance Chart
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                By 9:10 am Watch list (NIFTY50 - BANKNIFTY)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                Intraday, BTST/STBT, and short Term Equity Trades:
              </Text>
            </View>
          </View>

          <Text style={styles.subsub}>
            - Daily 1-2 Calls/Trades NIFTY50 Options
          </Text>
          <Text style={styles.subsub}>
            - Daily 2-4 Calls/Trades BANKNIFTY Options
          </Text>
          <Text style={styles.subsub}>
            - Daily 1-2 Calls/Trades Equity Options / Cash Equity
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>Overview all trades call history</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>Overview all nitrification history</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>Instant notification updates</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                Note: To receive instant notifications and updates, we
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                recommended to keep the app open or keep your device
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.sub}>✔</Text>
            </View>
            <View>
              <Text style={styles.sub}>
                unlocked and open (Don't let it go to sleep)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PremiumPaid;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: windowHeight,
    //width: windowWidth,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  head: {
    margin: 5,
    color: 'purple',
    fontWeight: 'bold',
  },
  sub: {
    color: '#000',
    textAlign: 'left',
    fontWeight: '500',
    marginHorizontal: 5,
    marginRight: 10,
  },
  subsub: {
    marginLeft: 25,
    color: '#000',
  },
});
