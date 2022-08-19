import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../../../axiosConfig';
import Moment from 'react-moment';
import {styles} from './TradeStyle';

const EquityCash = () => {
  const [allTrade, setAllTrade] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //  <============ All Teafe Get Api ===========>
  const getTrade = () => {
    setRefreshing(true);
    axiosConfig
      .get(`/equityCash_list`)
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
              {/* <View style={styles.botomview4}>
                <Text style={styles.bottomText1}>
                  <Moment element={Text} format="lll">
                    {trade.createdAt}
                  </Moment>
                </Text>
              </View> */}
            </View>

            {/* <================BUY Area=============> */}

            <View style={styles.bgarea3}>
              <Text style={styles.buy}>{trade?.script_type}</Text>
              <Text style={styles.notbuy}>
                {trade?.cash_scrpt_name?.scriptName} {trade?.active_value} -{' '}
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

              {/* <===========T2 =============> */}

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

              {/* <===========T3 =============> */}

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

              {/* <===========T4 =============> */}

              {trade?.t4_type === 'false' ? (
                <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 4{'\n'}
                    {trade?.T4}
                  </Text>
                </View>
              ) : (
                <View style={[styles.circle, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.notbuy}>
                    T₹ 4{'\n'}
                    {trade?.T4}
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
                {trade?.pl_type === 'Loss' ? (
                  <Text style={[styles.bottomText1, , {color: 'red'}]}>
                    ₹ {trade?.profit_loss_amt} {'\n'}| 00.00%
                  </Text>
                ) : (
                  <Text style={[styles.bottomText1, , {color: 'green'}]}>
                    ₹ {trade?.profit_loss_amt} {'\n'}| 00.00%
                  </Text>
                )}
              </View>
            </View>

            {/* <================ Date and Show more=============> */}
            <View style={styles.bgarea2}>
              <View style={styles.botomview3}>
                <Text style={styles.dateText}>
                  <Moment element={Text} format="lll">
                    {trade.createdAt}
                  </Moment>
                </Text>
              </View>
              <View style={styles.botomview2}>
                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>
                              Hello World! Hello World!Hello World!
                            </Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>Hello World!</Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.buttonClose}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle1}>Show Trade History</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EquityCash;
