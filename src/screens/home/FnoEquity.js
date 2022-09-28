import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../../../axiosConfig';
import Moment from 'react-moment';
import {styles} from './TradeStyle';
import ShowMore from 'react-native-show-more-button';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const FnoEquity = () => {
  const [allTrade, setAllTrade] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  //  <============ All Teafe Get Api ===========>
  const getTrade = () => {
    setRefreshing(true);
    axiosConfig
      .get(`/AppOptionList`)
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
                {trade?.fnoequty_scrpt_name?.scriptName} @ {trade?.active_value}{' '}
                - {trade?.active_value2}
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
                <View style={[styles.circle1, {backgroundColor: '#ef9a9a'}]}>
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
                <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
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
                <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
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
                <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
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
                <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
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
              {/* <ShowMore
                height={0}
                buttonColor={'blue'}
                showMoreText="View Trade History"
                showLessText="Hide Trade History">
                {trade?.t1_type === 'true' ? (
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target{' '}
                        {trade?.T1}
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                ) : null}
                {trade?.t2_type === 'true' ? (
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 2nd Target{' '}
                        {trade?.T2}
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                ) : null}
                {trade?.t3_type === 'true' ? (
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 3rd Target{' '}
                        {trade?.T3}
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                ) : null}
                {trade?.t4_type === 'true' ? (
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 4th Target{' '}
                        {trade?.T4}
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                ) : null}
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    <Text style={styles.dropTextOne}>
                      {trade?.fnoequty_scrpt_name?.scriptName} @ 5th Target
                    </Text>
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    <Text style={styles.dropTextOne}>
                      {trade?.fnoequty_scrpt_name?.scriptName} @ 6th Target
                    </Text>
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
                <View style={styles.showView}>
                  <View style={styles.insideViewOne}>
                    <Text style={styles.dropTextOne}>
                      {trade?.fnoequty_scrpt_name?.scriptName} @ 7th Target
                    </Text>
                  </View>
                  <View style={styles.insideViewTwo}>
                    <Text style={styles.dropTextOne}>22-08-2022</Text>
                  </View>
                </View>
              </ShowMore> */}
              <Collapse>
                <CollapseHeader>
                  <View style={{margin: 5}}>
                    <Text style={{color: 'blue'}}>View Trade History</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  {trade?.t1_type === 'true' ? (
                    <View style={styles.showView}>
                      <View style={styles.insideViewOne}>
                        <Text style={styles.dropTextOne}>
                          {trade?.fnoequty_scrpt_name?.scriptName} @ 1st Target{' '}
                          {trade?.T1}+
                        </Text>
                      </View>
                      <View style={styles.insideViewTwo}>
                        <Text style={styles.dropTextOne}>22-08-2022</Text>
                      </View>
                    </View>
                  ) : null}
                  {trade?.t2_type === 'true' ? (
                    <View style={styles.showView}>
                      <View style={styles.insideViewOne}>
                        <Text style={styles.dropTextOne}>
                          {trade?.fnoequty_scrpt_name?.scriptName} @ 2nd Target{' '}
                          {trade?.T2}+
                        </Text>
                      </View>
                      <View style={styles.insideViewTwo}>
                        <Text style={styles.dropTextOne}>22-08-2022</Text>
                      </View>
                    </View>
                  ) : null}
                  {trade?.t3_type === 'true' ? (
                    <View style={styles.showView}>
                      <View style={styles.insideViewOne}>
                        <Text style={styles.dropTextOne}>
                          {trade?.fnoequty_scrpt_name?.scriptName} @ 3rd Target{' '}
                          {trade?.T3}+
                        </Text>
                      </View>
                      <View style={styles.insideViewTwo}>
                        <Text style={styles.dropTextOne}>22-08-2022</Text>
                      </View>
                    </View>
                  ) : null}
                  {trade?.t4_type === 'true' ? (
                    <View style={styles.showView}>
                      <View style={styles.insideViewOne}>
                        <Text style={styles.dropTextOne}>
                          {trade?.fnoequty_scrpt_name?.scriptName} @ 4th Target{' '}
                          {trade?.T4}+
                        </Text>
                      </View>
                      <View style={styles.insideViewTwo}>
                        <Text style={styles.dropTextOne}>22-08-2022</Text>
                      </View>
                    </View>
                  ) : null}
                  {/* <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 5th Target
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 6th Target
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View>
                  <View style={styles.showView}>
                    <View style={styles.insideViewOne}>
                      <Text style={styles.dropTextOne}>
                        {trade?.fnoequty_scrpt_name?.scriptName} @ 7th Target
                      </Text>
                    </View>
                    <View style={styles.insideViewTwo}>
                      <Text style={styles.dropTextOne}>22-08-2022</Text>
                    </View>
                  </View> */}
                </CollapseBody>
              </Collapse>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FnoEquity;
