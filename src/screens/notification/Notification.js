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
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../components/CustomHeader';
import {windowWidth} from '../../utils/Dimensions';

export default function Notification({navigation}) {
  const [notify, setNotify] = useState([]);
  const [proImage, setProImage] = useState([]);

  const chooseImg = type => {
    let options = {
      mediaType: 'photo',
      maxWidth: 100,
      maxHeight: 100,
      selectionLimit: 1,
      //includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('response : ' + JSON.stringify(response));
      setProImage(response);
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

  // const getNotify = async () => {
  //   axios
  //     .get('http://65.0.80.5:5000/api/user/allUserNotification', {
  //       headers: {
  //         'user-token': await AsyncStorage.getItem('user-token'),
  //       },
  //     })
  //     .then(response => {
  //       const notify = response.data.data;
  //       setNotify(notify);
  //       console.log(notify);
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // };
  // useEffect(() => {
  //   if (AsyncStorage.getItem('user-token')) {
  //     getNotify();
  //   }
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomHeader />
      </View>
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
        <ScrollView>
          <View style={{marginBottom: 200}}>
            <View style={styles.listMainView}>
              <ListItem bottomDivider>
                <View>
                  {/* <================TOP Area=============> */}

                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.bgText}>Intraday</Text>
                    </View>
                  </View>

                  {/* <================BUY Area=============> */}

                  <View style={styles.bgarea3}>
                    <Text style={styles.buy}>BUY</Text>
                    <Text style={styles.notbuy}>
                      BANKNIFTY 3000 @ 100 - 200
                    </Text>
                  </View>

                  {/* <================Circle Area=============> */}
                  {/* <===========SL=============> */}

                  <View style={styles.bgarea2}>
                    <View
                      style={[styles.circle1, {backgroundColor: '#ef9a9a'}]}>
                      <Text style={styles.notbuy1}>
                        SL{'\n'}
                        50
                      </Text>
                    </View>

                    {/* <===========T1 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 1{'\n'}
                        100
                      </Text>
                    </View>

                    {/* <===========T2 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        200
                      </Text>
                    </View>

                    {/* <===========T3 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        300
                      </Text>
                    </View>

                    {/* <===========T4 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 4{'\n'}
                        400
                      </Text>
                    </View>
                  </View>

                  {/* <================Botton Area=============> */}
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview1}>
                      <Text style={styles.bottomText}>
                        Quantity & investment Amount
                      </Text>
                      <Text style={styles.bottomText1}>
                        50 Lots(100 Qty) = ₹ 5000
                      </Text>
                    </View>
                    <View style={styles.botomview2}>
                      <Text style={styles.bottomText}>P&L</Text>
                      <Text style={[styles.bottomText1, {color: 'red'}]}>
                        ₹ 200 | 20%
                      </Text>
                    </View>
                  </View>

                  {/* <================ Date and Show more=============> */}
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.dateText}>12-08-2022 12:00PM</Text>
                    </View>
                    <View style={styles.botomview2}>
                      <Text>hsdhhd</Text>
                    </View>
                  </View>
                </View>
              </ListItem>
            </View>
            <View style={styles.listMainView}>
              <ListItem bottomDivider>
                <View style={styles.subView}>
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.imageGraph}
                    />
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.headText}>Title</Text>
                    <Text style={styles.SimpleText}>
                      Officia adipisicing non mollit consequat magna aute enim
                      labore veniam pariatur. Pariatur consequat quis consequat
                      nisi officia deserunt ullamco eiusmod fugiat. Id sunt
                      laborum occaecat elit occaecat sit aliqua laboris
                      incididunt laborum irure sint. Officia minim dolore non
                      nisi aute consequat cupidatat ad ea.
                    </Text>
                  </View>
                </View>
              </ListItem>
            </View>
            <View style={styles.listMainView}>
              <ListItem bottomDivider>
                <View style={styles.subView}>
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.imageGraph}
                    />
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.headText}>Title</Text>
                    <Text style={styles.SimpleText}>
                      Officia adipisicing non mollit consequat magna aute enim
                      labore veniam pariatur. Pariatur consequat quis consequat
                      nisi officia deserunt ullamco eiusmod fugiat. Id sunt
                      laborum occaecat elit occaecat sit aliqua laboris
                      incididunt laborum irure sint. Officia minim dolore non
                      nisi aute consequat cupidatat ad ea.
                    </Text>
                  </View>
                </View>
              </ListItem>
            </View>
            <View style={styles.listMainView}>
              <ListItem bottomDivider>
                <View>
                  {/* <================TOP Area=============> */}

                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.bgText}>Intraday</Text>
                    </View>
                  </View>

                  {/* <================BUY Area=============> */}

                  <View style={styles.bgarea3}>
                    <Text style={styles.buy}>BUY</Text>
                    <Text style={styles.notbuy}>
                      BANKNIFTY 3000 @ 100 - 200
                    </Text>
                  </View>

                  {/* <================Circle Area=============> */}
                  {/* <===========SL=============> */}

                  <View style={styles.bgarea2}>
                    <View
                      style={[styles.circle1, {backgroundColor: '#ef9a9a'}]}>
                      <Text style={styles.notbuy1}>
                        SL{'\n'}
                        50
                      </Text>
                    </View>

                    {/* <===========T1 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#66bb6a'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 1{'\n'}
                        100
                      </Text>
                    </View>

                    {/* <===========T2 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 2{'\n'}
                        200
                      </Text>
                    </View>

                    {/* <===========T3 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 3{'\n'}
                        300
                      </Text>
                    </View>

                    {/* <===========T4 =============> */}

                    <View style={[styles.circle, {backgroundColor: '#fff'}]}>
                      <Text style={styles.notbuy}>
                        T₹ 4{'\n'}
                        400
                      </Text>
                    </View>
                  </View>

                  {/* <================Botton Area=============> */}
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview1}>
                      <Text style={styles.bottomText}>
                        Quantity & investment Amount
                      </Text>
                      <Text style={styles.bottomText1}>
                        50 Lots(100 Qty) = ₹ 5000
                      </Text>
                    </View>
                    <View style={styles.botomview2}>
                      <Text style={styles.bottomText}>P&L</Text>
                      <Text style={[styles.bottomText1, {color: 'red'}]}>
                        ₹ 200 | 20%
                      </Text>
                    </View>
                  </View>

                  {/* <================ Date and Show more=============> */}
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.dateText}>12-08-2022 12:00PM</Text>
                    </View>
                    <View style={styles.botomview2}>
                      <Text>hsdhhd</Text>
                    </View>
                  </View>
                  {/* <================ Message =============> */}
                  <View style={styles.bgarea2}>
                    <View style={styles.botomview3}>
                      <Text style={styles.messageText}>
                        Now you can remove the trade the SL has been hit
                      </Text>
                    </View>
                  </View>
                </View>
              </ListItem>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
    marginVertical: 2,
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
    //marginHorizontal: 5,
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
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalMainText: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  modalMainHead: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalMainDate: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonClose: {
    backgroundColor: 'green',
    marginTop: 10,
    borderRadius: 10,
  },
  textStyle1: {
    color: 'blue',
    fontSize: 12,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 15,
    elevation: 5,
  },
  modalText: {
    margin: 5,
    color: '#000',
  },
  //image component
  subView: {
    margin: 5,
    backgroundColor: '#fff',
  },
  imageView: {},
  imageGraph: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
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
