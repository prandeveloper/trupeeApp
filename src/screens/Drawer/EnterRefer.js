import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
  } from 'react-native';
  import React, {useState} from 'react';
  import {TextInput} from 'react-native-paper';
  import RazorpayCheckout from 'react-native-razorpay';
  
  const EnterRefer = () => {
    const [code, setCode] = useState('');
  
   
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <View style={styles.imageView}>
                <Image
                  source={require('../../Images/wallet.jpg')}
                  style={styles.imageGraph}
                />
              </View>
              <View style={styles.textView}>
                <View>
                  <Text style={styles.headText}>
                    Enter Referral Code of the person who referred you for our App...
                  </Text>
                </View>
               
                {/* <View style={styles.spaceView}>
                  <Text style={styles.SimpleText}>
                    Fill the amount you wish to contribute to our team
                  </Text>
                </View> */}
                <View style={styles.spaceView}>
                  <TextInput
                    label="Referral Code"
                    mode="outlined"
                    value={code}
                    onChangeText={setCode}
                    keyboardType='default'
                  />
                </View>
                
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default EnterRefer;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    mainView: {},
    subView: {
      margin: 18,
      backgroundColor: '#fff',
    },
    imageView: {alignItems: 'center'},
    imageGraph: {
      width: '80%',
      height: 250,
    },
    textView: {
      margin: 2,
    },
  
    headText: {
      color: 'blue',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 5,
    },
    spaceView: {marginVertical: 3},
    SimpleText: {
      color: '#000',
      fontSize: 12,
      lineHeight: 20,
    },
    bottomButton: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'blue',
      paddingVertical: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: '700',
    },
  });
  