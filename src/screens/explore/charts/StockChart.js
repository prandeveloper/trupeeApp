import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const StockChart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.subView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../../Images/graph.jpeg')}
                style={styles.imageGraph}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.headText}>
                #NIFTY Intraday Support Resistance Level
              </Text>
              <Text style={styles.SimpleText}>
                Today will be slightly gap down opening in nifty. After Opening
                if Nifty sustain above 16700 level than possible upside rally
                100-200.
              </Text>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../../Images/graph.jpeg')}
                style={styles.imageGraph}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.headText}>
                #NIFTY Intraday Support Resistance Level
              </Text>
              <Text style={styles.SimpleText}>
                Today will be slightly gap down opening in nifty. After Opening
                if Nifty sustain above 16700 level than possible upside rally
                100-200.
              </Text>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../../Images/graph.jpeg')}
                style={styles.imageGraph}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.headText}>
                #NIFTY Intraday Support Resistance Level
              </Text>
              <Text style={styles.SimpleText}>
                Today will be slightly gap down opening in nifty. After Opening
                if Nifty sustain above 16700 level than possible upside rally
                100-200.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StockChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {},
  subView: {
    margin: 10,
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
    color: '#000',
    fontWeight: '500',
  },
  SimpleText: {
    color: '#000',
  },
});
