import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Appreciation = () => {
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
              <Text style={styles.headText}>
                How do we utilize the appreciation amountsend by users ?
              </Text>
              <Text style={styles.SimpleText}>
                Trupee has a mission to give wings to every trader, investor and
                make sure to the best of our ability to help traders to increase
                success rate and form financial independence.
              </Text>
              <Text style={styles.SimpleText}>
                Trupee has a mission to give wings to every trader, investor and
                make sure we analysis to the best of our ability to help traders
                to increase success rate and form financial independence.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  imageView: {},
  imageGraph: {
    width: '100%',
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
  SimpleText: {
    color: '#000',
    fontSize: 15,
    lineHeight: 20,
  },
});
