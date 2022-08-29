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

const Appreciation = () => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.subView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../Images/WhatsApp.jpeg')}
                style={styles.imageGraph}
              />
            </View>
            <View style={styles.textView}>
              <View>
                <Text style={styles.headText}>
                  How do we utilize the appreciation amountsend by users ?
                </Text>
              </View>
              <View style={styles.spaceView}>
                <Text style={styles.SimpleText}>
                  Trupee has a commitment to help needy-poor-orphan people by
                  your donation, a token of appreciation or Corporate Social
                  Responsibility towards our society.
                </Text>
              </View>
              <View style={styles.spaceView}>
                <Text style={styles.SimpleText}>
                  All the contribution shared by you are forwarded to NGO to
                  help needy people. We have associated with SWRNA RAJHANS
                  STUDENTS WELFARE SOCIETY. Visit:
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        'https://swrnarajhanscharitabletrust.org/',
                      );
                    }}>
                    <Text style={{color: 'blue'}}>
                      https://swrnarajhanscharitabletrust.org/
                    </Text>
                  </TouchableOpacity>
                  independence.
                </Text>
              </View>
              <View style={styles.spaceView}>
                <Text style={styles.SimpleText}>
                  If you would like to help us on our mission, do share your
                  token of love❤
                </Text>
              </View>
              <View style={styles.spaceView}>
                <Text style={styles.SimpleText}>
                  Fill the amount you wish to contribute to our team
                </Text>
              </View>
              <View style={styles.spaceView}>
                <TextInput
                  label="Amount"
                  mode="outlined"
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.spaceView}>
                <TextInput
                  label="We would love to hear from you"
                  mode="outlined"
                  value={desc}
                  onChangeText={setDesc}
                  multiline={true}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Appreciation;

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
    fontSize: 15,
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
