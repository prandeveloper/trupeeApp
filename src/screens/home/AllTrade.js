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
import ShowMore from 'react-native-show-more-button';
// import RNPreventScreenshot from 'react-native-screenshot-prevent';

const AllTrade = date => {
  const [allTrade, setAllTrade] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  //RNPreventScreenshot.enabled(true);

  //  <============ All Teafe Get Api ===========>
  const getTrade = () => {
    setRefreshing(true);
    axiosConfig
      .get(`/tradelist`)
      .then(response => {
        //console.log(response.data.data);
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
                    {trade?.fnoequty_scrpt_name?.scriptName} @{' '}
                    {trade?.active_value} - {trade?.active_value2}
                  </Text>
                </View>
              ) : trade?.cash_scrpt_name?.scriptName != '' &&
                trade?.cash_scrpt_name?.scriptName != undefined &&
                trade?.cash_scrpt_name?.scriptName != null ? (
                <View>
                  <Text style={styles.notbuy}>
                    {trade?.cash_scrpt_name?.scriptName} @ {trade?.active_value}{' '}
                    - {trade?.active_value2}
                  </Text>
                </View>
              ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                trade?.fnoindex_scrpt_name?.scriptName != null ? (
                <View>
                  <Text style={styles.notbuy}>
                    {trade?.fnoindex_scrpt_name?.scriptName} @{' '}
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
                <View style={[styles.circle1, {backgroundColor: '#ef9a9a'}]}>
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
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
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
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 1{'\n'}
                        {trade?.T1}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {/* <===========T2 =============> */}

              {trade?.FT1 != '' &&
              trade?.FT1 != null &&
              trade?.FT1 != undefined ? (
                <View>
                  {trade?.FT1_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 1{'\n'}
                        {trade?.FT1}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 1{'\n'}
                        {trade?.FT1}
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  {trade?.t2_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        {trade?.T2}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        {trade?.T2}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {/* <===========T3 =============> */}

              {trade?.FT2 != '' &&
              trade?.FT2 != null &&
              trade?.FT2 != undefined ? (
                <View>
                  {trade?.FT2_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        {trade?.FT2}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        {trade?.FT2}
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  {trade?.t3_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        {trade?.T3}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        {trade?.T3}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {/* <===========T4 =============> */}

              {trade?.FT3 != '' &&
              trade?.FT3 != null &&
              trade?.FT3 != undefined ? (
                <View>
                  {trade?.FT3_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        {trade?.FT3}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        {trade?.FT3}
                      </Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  {trade?.t4_type === 'false' ? (
                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 4{'\n'}
                        {trade?.T4}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 4{'\n'}
                        {trade?.T4}
                      </Text>
                    </View>
                  )}
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
                {trade?.pl < 0 ? (
                  <Text style={[styles.bottomText1, , {color: 'red'}]}>
                    ₹ {trade?.pl} | {trade?.pl_per}%
                  </Text>
                ) : (
                  <Text style={[styles.bottomText1, , {color: 'green'}]}>
                    ₹ {trade?.pl} | {trade?.pl_per}%
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
            </View>
            {/* <============Seemore=========> */}
            <View>
              <ShowMore
                height={0}
                buttonColor={'blue'}
                showMoreText="View Trade History"
                showLessText="Hide Trade History">
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    {trade?.fnoequty_scrpt_name?.scriptName != '' &&
                    trade?.fnoequty_scrpt_name?.scriptName != undefined &&
                    trade?.fnoequty_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.cash_scrpt_name?.scriptName != '' &&
                      trade?.cash_scrpt_name?.scriptName != undefined &&
                      trade?.cash_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.cash_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : trade?.fnoindex_scrpt_name?.scriptName != '' &&
                      trade?.fnoindex_scrpt_name?.scriptName != undefined &&
                      trade?.fnoindex_scrpt_name?.scriptName != null ? (
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoindex_scrpt_name?.scriptName} @ 1st Target
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
              </ShowMore>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllTrade;
