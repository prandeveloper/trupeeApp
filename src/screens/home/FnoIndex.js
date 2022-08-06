import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowWidth} from '../../utils/Dimensions';
import axiosConfig from '../../../axiosConfig';
import Moment from 'react-moment';

const FnoIndex = () => {
  const [allTrade, setAllTrade] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  //  <============ All Teafe Get Api ===========>
  const getTrade = () => {
    setRefreshing(true);
    axiosConfig
      .get(`/fnoIndexlist`)
      .then(response => {
        console.log(response.data.data);
        setAllTrade(response.data.data);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTrade();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getTrade} />
        }>
        {allTrade?.map(trade => (
          <View style={{borderBottomWidth: 1}} key={trade._id}>
            {/* <================TOP Area=============> */}

            <View style={styles.bgarea2}>
              <View style={styles.botomview3}>
                <Text style={styles.bgText}>{trade?.call_type}</Text>
              </View>
              <View style={styles.botomview4}>
                <Text style={styles.bottomText1}>
                  <Moment element={Text} format="lll">
                    {trade.createdAt}
                  </Moment>
                </Text>
              </View>
            </View>

            {/* <================BUY Area=============> */}

            <View style={styles.bgarea3}>
              <Text style={styles.buy}>{trade?.equity_script}</Text>
              {/* <Text style={styles.notbuy}>MCDOWELL -N 830CE @ 19-20</Text> */}
              <Text style={styles.notbuy}>
                {trade?.script_name?.script_name} {trade?.active_value} -{' '}
                {trade?.active_value2}
              </Text>
            </View>

            {/* <================Circle Area=============> */}

            <View style={styles.bgarea2}>
              {/* <===========SL=============> */}

              {trade?.sl_type === 'false' ? (
                <View style={[styles.circle1, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy1}>
                    SL{'\n'}
                    {trade?.SL}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle1, {backgroundColor: '#FA8072'}]}>
                  <Text style={styles.notbuy1}>
                    SL{'\n'}
                    {trade?.SL}
                  </Text>
                </View>
              )}
              {/* <===========T1 =============> */}

              {trade?.trl_type === 'false' ? (
                <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy}>
                    TRL{'\n'}
                    {trade?.trl}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.notbuy}>
                    TRL{'\n'}
                    {trade?.trl}
                  </Text>
                </View>
              )}

              {/* <===========T2 =============> */}

              {trade?.t1_type === 'false' ? (
                <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 1{'\n'}
                    {trade?.T1}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 1{'\n'}
                    {trade?.T1}
                  </Text>
                </View>
              )}

              {/* <===========T3 =============> */}

              {trade?.t2_type === 'false' ? (
                <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 2{'\n'}
                    {trade?.T2}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 2{'\n'}
                    {trade?.T2}
                  </Text>
                </View>
              )}

              {/* <===========T4 =============> */}

              {trade?.t3_type === 'false' ? (
                <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 3{'\n'}
                    {trade?.T3}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 3{'\n'}
                    {trade?.T3}
                  </Text>
                </View>
              )}
            </View>

            {/* <================Botton Area=============> */}
            <View style={styles.bgarea2}>
              <View style={styles.botomview1}>
                <Text style={styles.bottomText}>
                  Quantity & investment Amount
                </Text>
                <Text style={styles.bottomText1}>
                  {trade?.no_of_lots} Lots({trade?.qty} Qty) = ₹
                  {trade?.investment_amt}
                </Text>
              </View>
              <View style={styles.botomview2}>
                <Text style={styles.bottomText}>P&L</Text>
                <Text style={styles.bottomText1}>
                  ₹{trade?.profit_loss} | 00.00%
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FnoIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: '#fff',
  },
  bgarea: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bgText: {
    backgroundColor: '#a82682',
    color: '#fff',
    padding: 5,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  bgarea3: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  bgarea2: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  buy: {
    backgroundColor: '#00b050',
    color: '#000',
    padding: 3,
    fontWeight: '500',
  },
  notbuy1: {
    fontSize: 12,
    color: '#000',
    paddingHorizontal: 6,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  notbuy: {
    fontSize: 12,
    color: '#000',
    padding: 3,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  circle1: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
  },
  circle: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
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
  botomview3: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  botomview4: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomText: {
    color: '#000',
    fontWeight: '500',
  },
  bottomText1: {
    color: '#000',
  },
});
