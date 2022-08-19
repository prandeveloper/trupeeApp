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
import {windowWidth} from '../../utils/Dimensions';
import Moment from 'react-moment';
import axiosConfig from '../../../axiosConfig';
import {styles} from './TradeStyle';

const AllTrade = () => {
  const [allTrade, setAllTrade] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //  <============ All Teafe Get Api ===========>
  const getTrade = () => {
    setRefreshing(true);
    axiosConfig
      .get(`/tradelist`)
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
          <View
            style={{borderBottomWidth: 1, backgroundColor: '#fff'}}
            key={trade._id}>
            <View style={styles.bgarea2}>
              <View style={styles.botomview3}>
                <Text style={styles.bgText}>{trade?.call_type}</Text>
              </View>
            </View>

            <View style={styles.bgarea3}>
              <View>
                <Text style={styles.buy}>{trade?.script_type}</Text>
              </View>
              {trade?.fnoequty_scrpt_name?.scriptName != '' &&
              trade?.fnoequty_scrpt_name?.scriptName != undefined &&
              trade?.fnoequty_scrpt_name?.scriptName != null ? (
                <View>
                  <Text style={styles.notbuy}>
                    {trade?.fnoequty_scrpt_name?.scriptName}{' '}
                    {trade?.active_value} - {trade?.active_value2}
                  </Text>
                </View>
              ) : trade?.cash_scrpt_name?.scriptName != '' &&
                trade?.cash_scrpt_name?.scriptName != undefined &&
                trade?.cash_scrpt_name?.scriptName != null ? (
                <View>
                  <Text style={styles.notbuy}>
                    {trade?.cash_scrpt_name?.scriptName} {trade?.active_value} -{' '}
                    {trade?.active_value2}
                  </Text>
                </View>
              ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                trade?.fnoindex_scrpt_name?.scriptName != null ? (
                <View>
                  <Text style={styles.notbuy}>
                    {trade?.fnoindex_scrpt_name?.scriptName}{' '}
                    {trade?.active_value} - {trade?.active_value2}
                  </Text>
                </View>
              ) : null}
            </View>

            {/* <===========SL=============> */}
            <View style={styles.bgarea2}>
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
              {trade?.trl != '' &&
              trade?.trl != null &&
              trade?.trl != undefined ? (
                <View>
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
                </View>
              ) : (
                <View>
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
                </View>
              )}

              {/* <===========T2 =============> */}

              {trade?.T2 != '' &&
              trade?.T2 != null &&
              trade?.T2 != undefined ? (
                <View>
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
                </View>
              ) : (
                <View>
                  {trade?.tl_type === 'false' ? (
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
                </View>
              )}

              {/* {trade?.t2_type === 'false' ? (
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
              )} */}

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
                    ₹ {trade?.profit_loss_amt} | 00.00%
                  </Text>
                ) : (
                  <Text style={[styles.bottomText1, , {color: 'green'}]}>
                    ₹ {trade?.profit_loss_amt} | 00.00%
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
                <View style={styles.centeredView} key={trade?._id}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}
                    key={trade._id}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>
                              BANKNIFTY 3500 P2
                            </Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>08/08/2022</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>
                              BANKNIFTY 3500 P2
                            </Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>08/08/2022</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>
                              BANKNIFTY 3500 P2
                            </Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>08/08/2022</Text>
                          </View>
                        </View>
                        <View style={styles.modalMainText}>
                          <View style={styles.modalMainHead}>
                            <Text style={styles.modalText}>
                              BANKNIFTY 3500 P2
                            </Text>
                          </View>
                          <View style={styles.modalMainDate}>
                            <Text style={styles.modalText}>08/08/2022</Text>
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

export default AllTrade;
