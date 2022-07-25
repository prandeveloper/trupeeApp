import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomHeader({title, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        height: 100,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.logoImg}
            source={require('../Images/screenlogo/screenLogo.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.calender}>
          <View>
            <TouchableOpacity>
              <View style={styles.calenderStyle}>
                <Image
                  source={require('../Images/Icons/top-calander-colour-icon1.png')}
                  style={styles.calenderImage}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.calenderStyle}>
              <Text style={styles.calenderText}>Trade History</Text>
              <Text style={styles.calenderText}>13th July</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logoImg: {
    width: 130,
    height: 50,
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
    borderWidth: 1,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00b050',
    borderRadius: 5,
  },
});

export default CustomHeader;
