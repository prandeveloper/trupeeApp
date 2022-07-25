import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, Image} from 'react-native-elements';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../components/CustomHeader';

export default function Notification({navigation}) {
  const [notify, setNotify] = useState([]);

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
    <SafeAreaView>
      <View>
        <CustomHeader />
      </View>
      <View style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.hello}>
            <Text style={styles.helloText}>Notifications</Text>
          </View>
          <View>
            <ListItem bottomDivider>
              {/* <Icon name="bell" color="black" size={25} /> */}
              <ListItem.Content>
                <ListItem.Title style={styles.listTitle}>
                  Upload your P&L Screenshot
                </ListItem.Title>
                <ListItem.Subtitle>5-0712022 03:30:02 PM </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
          <View>
            <ListItem bottomDivider>
              {/* <Icon name="bell" color="black" size={25} /> */}
              <ListItem.Content>
                <ListItem.Title style={styles.listTitle}>
                  BANKNIFTY 35300CE @ 1st Target 530+
                </ListItem.Title>
                <ListItem.Subtitle>5-0712022 03:30:02 PM </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
          <View>
            <ListItem bottomDivider>
              {/* <Icon name="bell" color="black" size={25} /> */}
              <ListItem.Content>
                <ListItem.Title style={styles.listTitle}>
                  Upload your P&L Screenshot
                </ListItem.Title>
                <ListItem.Subtitle>5-0712022 03:30:02 PM </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
          <View>
            <ListItem bottomDivider>
              {/* <Icon name="bell" color="black" size={25} /> */}
              <ListItem.Content>
                <ListItem.Title style={styles.listTitle}>
                  Upload your P&L Screenshot
                </ListItem.Title>
                <ListItem.Subtitle>5-0712022 03:30:02 PM</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
  },
  helloText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  listTitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
    marginVertical: 5,
  },
});
