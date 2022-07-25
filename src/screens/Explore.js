import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Explore = () => {
  return (
    <SafeAreaView style={{}}>
      <View>
        <CustomHeader />
      </View>
      <View>
        <ImageBackground
          source={require('../Images/explore/colorbg.png')}
          style={styles.colorImage}>
          <View style={styles.aaa}>
            <View style={styles.bbb}>
              <View style={styles.ccc}>
                <Image
                  source={require('../Images/explore/start-up-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
              <View style={styles.ddd}>
                <Image
                  source={require('../Images/explore/trupee-library-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
            </View>
            <View style={styles.bbb}>
              <View style={styles.ccc}>
                <Image
                  source={require('../Images/explore/performance-sheet-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
              <View style={styles.ddd}>
                <Image
                  source={require('../Images/explore/refer-earn-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
            </View>
            <View style={styles.bbb}>
              <View style={styles.ccc}>
                <Image
                  source={require('../Images/explore/opportunity-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
              <View style={styles.ddd}>
                <Image
                  source={require('../Images/explore/treading-viw-chart-tab1.png')}
                  style={styles.exploreImg}
                />
              </View>
            </View>
            <View style={styles.bbb}>
              <Text style={styles.exploreText}>
                A reliable platform for small and short term investors
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  colorImage: {
    width: '100%',
    height: '100%',
  },
  exploreImg: {
    height: 150,
    width: 150,
    margin: 5,
  },
  aaa: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  bbb: {
    flexDirection: 'row',
  },

  exploreText: {
    fontSize: 12,
    marginTop: 15,
  },
});
