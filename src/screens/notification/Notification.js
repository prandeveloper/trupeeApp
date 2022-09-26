import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, Image} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axiosConfig from '../../../axiosConfig';
import DatePicker from 'react-native-datepicker';
import Moment from 'react-moment';
import ShowMore from 'react-native-show-more-button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notification({navigation}) {
  const [notify, setNotify] = useState([]);
  const [plImage, setPlImage] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const chooseImg = type => {
    let options = {
      mediaType: 'photo',
      maxWidth: 100,
      maxHeight: 100,
      selectionLimit: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('response : ' + JSON.stringify(response));
      setPlImage(response.assets[0].base64);
      upload();
      //console.log(response.assets[0].base64);
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.aalert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.aalert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.aalert(response.errorMessage);
        return;
      }
    });
  };
  //<============Upload Image ==============>
  function upload() {
    handleSubmit();
  }
  const handleSubmit = async () => {
    console.log('demo', plImage);
    const data = new FormData();
    data.append('pnlimg', plImage);

    fetch(`http://65.0.183.149:8000/admin/addPnlsheet`, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
        'auth-token': await AsyncStorage.getItem('auth-token'),
      },
      body: data,
    })
      .then(response => {
        response.json().then(res => {
          console.log(res.data);
          if (res.message === 'success') {
            Alert.alert('Image Uploaded Successfully👍');
          } else {
            Alert.alert('Something went wrong');
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // <================ Get Notifivation API ==========>

  const getNotify = async () => {
    axiosConfig
      .get(`/notificationList`)
      .then(response => {
        const notify = response.data.data;
        setNotify(notify);
        console.log(notify);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getNotify();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.mainView}>
          <View style={styles.firstView}>
            <TouchableOpacity>
              <Image
                style={styles.logoImg}
                source={require('../../Images/top-left-logo/top-left-logo1.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.secondView}>
            <View style={styles.dateTextView}>
              <View style={styles.tradeTextView}>
                <Text style={{color: 'green'}}>Trade History</Text>
              </View>
              <TouchableOpacity
                style={styles.calender}
                onPress={() => setOpen(true)}>
                <DatePicker
                  open={open}
                  date={date}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={setDate}
                  showIcon={true}
                  hideText={false}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      right: 5,

                      height: 18,
                      marginBottom: 0,
                    },
                    dateInput: {
                      marginLeft: 5,
                      borderWidth: 0,
                      marginBottom: 5,
                    },
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* <================= Upload Component Start ============> */}
      <View>
        <View>
          <ListItem bottomDivider>
            <View style={styles.direction}>
              <View style={styles.d1}>
                <Text style={styles.uploadText}>
                  Upload your P&L Screenshot
                </Text>
              </View>
              <View style={styles.d2}>
                <TouchableOpacity
                  style={styles.uploadImage}
                  onPress={chooseImg}>
                  <Icon name="upload" color="green" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </ListItem>
        </View>

        {/* <================= Main Component Start ============> */}

        <ScrollView>
          <View style={{marginBottom: 200}}>
            {/* <==============jkkjkkk============> */}

            <View style={styles.listMainView}>
              {notify?.map(trade => (
                <View style={{borderBottomWidth: 1}}>
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.bgText}>
                        {trade?.tradeId?.call_type}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.bgarea3}>
                    <View>
                      <Text style={styles.buy}>
                        {trade?.tradeId?.script_type}
                      </Text>
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
                          {trade?.cash_scrpt_name?.scriptName} @{' '}
                          {trade?.active_value} - {trade?.active_value2}
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
                      <View
                        style={[styles.circle1, {backgroundColor: '#ef9a9a'}]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              TRL{'\n'}
                              {trade?.trl}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 1{'\n'}
                              {trade?.T1}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 1{'\n'}
                              {trade?.FT1}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 2{'\n'}
                              {trade?.T2}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 2{'\n'}
                              {trade?.FT2}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 3{'\n'}
                              {trade?.T3}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 3{'\n'}
                              {trade?.FT3}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                          <View
                            style={[styles.circle, {backgroundColor: '#fff'}]}>
                            <Text style={styles.notbuy}>
                              T₹ 4{'\n'}
                              {trade?.T4}
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.circle,
                              {backgroundColor: '#66bb6a'},
                            ]}>
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
                      {trade.pl < 0 ? (
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
                          <Text style={styles.dropTextOne}>
                            {trade?.fnoindex_scrpt_name?.scriptName} @{' '}
                            {trade?.active_value} - {trade?.active_value2}
                          </Text>
                        </View>
                        <View style={styles.insideViewTwo}>
                          <Text style={styles.dropTextOne}>22-08-2022</Text>
                        </View>
                      </View>
                      <View style={styles.showView}>
                        <View style={styles.insideViewOne}>
                          <Text style={styles.dropTextOne}>
                            {trade?.fnoindex_scrpt_name?.scriptName} @{' '}
                            {trade?.active_value} - {trade?.active_value2}
                          </Text>
                        </View>
                        <View style={styles.insideViewTwo}>
                          <Text style={styles.dropTextOne}>22-08-2022</Text>
                        </View>
                      </View>
                      <View style={styles.showView}>
                        <View style={styles.insideViewOne}>
                          <Text style={styles.dropTextOne}>
                            {trade?.fnoindex_scrpt_name?.scriptName} @{' '}
                            {trade?.active_value} - {trade?.active_value2}
                          </Text>
                        </View>
                        <View style={styles.insideViewTwo}>
                          <Text style={styles.dropTextOne}>22-08-2022</Text>
                        </View>
                      </View>
                    </ShowMore>
                  </View>

                  <View>
                    <Text style={{color: '#000', marginVertical: 5}}>
                      SL has been Hit your trade is out
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#000', marginVertical: 5}}>
                      {trade?.tradeId?.cstmMsg}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* <================= Image Component Start ============> */}
            <View style={styles.listMainView}>
              {notify?.map(trade => (
                <ListItem bottomDivider key={trade._id}>
                  <View style={styles.subView}>
                    <View style={styles.imageView}>
                      <Image
                        source={{uri: `${trade?.img}`}}
                        style={styles.imageGraph}
                      />
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.headText}>{trade?.title}</Text>
                      <Text style={styles.SimpleText}>{trade?.desc}</Text>
                    </View>
                  </View>
                </ListItem>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  //Header
  mainView: {
    flexDirection: 'row',
    marginTop: 0,
    height: 100,
    backgroundColor: '#FFF',
    elevation: 10,
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
  },
  secondView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTextView: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
  },
  tradeTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 120,
    height: 45,
    marginLeft: 10,
  },
  calenderStyle: {
    borderColor: '#00b050',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  calenderImage: {
    height: 25,
    width: 30,
  },
  calenderText: {
    color: '#000',
  },
  calender: {
    borderWidth: 0,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Component Css
  container: {
    flex: 1,
  },
  hello: {
    alignItems: 'center',
  },
  helloText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  d1: {flex: 7, justifyContent: 'center'},
  d2: {flex: 1, justifyContent: 'center'},
  uploadText: {color: '#000', fontWeight: '500'},
  uploadImage: {color: '#000'},
  //Scroll Start
  listMainView: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomColor: '#000',
  },

  //trade component

  bgarea: {
    // margin: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bgText: {
    backgroundColor: '#a82682',
    color: '#fff',
    paddingHorizontal: 3,
    paddingVertical: 2,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  bgarea3: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 5,
    //marginHorizontal: 5,
  },
  bgarea2: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },

  buy: {
    backgroundColor: '#00b050',
    color: '#000',
    paddingHorizontal: 3,
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
    fontSize: 13,
    color: '#000',
    padding: 3,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  circle1: {
    margin: 3,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 5,
  },
  circle: {
    margin: 3,
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
    fontWeight: '400',
    fontSize: 13,
  },
  bottomText1: {
    color: '#000',
    fontWeight: '400',
    fontSize: 13,
  },
  dateText: {
    fontSize: 10,
    color: 'gray',
  },

  showView: {flexDirection: 'row', marginVertical: 10},
  insideViewOne: {flex: 2, marginLeft: 5},
  dropTextOne: {color: '#000', fontSize: 12},
  insideViewTwo: {
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  //image component
  subView: {
    margin: 0,
    backgroundColor: '#fff',
  },

  imageGraph: {
    width: 320,
    height: 30,
  },
  textView: {
    margin: 2,
  },
  headText: {
    color: '#000',
    fontWeight: '500',
  },
  SimpleText: {
    color: '#000',
  },
});
