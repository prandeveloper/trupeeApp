import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-elements';
// import axios from 'axios';
// import moment from 'moment';
// import NotifyHeader from './header/NotifyHeader';

export default function Trasaction({navigation}) {
  //const [trans, setTrans] = useState([]);

  //   const getTrans = async () => {
  //     axios
  //       .get('http://65.0.80.5:5000/api/admin/user_transaction_list', {
  //         headers: {
  //           'user-token': await AsyncStorage.getItem('user-token'),
  //         },
  //       })
  //       .then(response => {
  //         const trans = response.data.data;
  //         setTrans(trans);
  //         console.log('data', trans);
  //       })
  //       .catch(error => {
  //         console.log(error.response);
  //       });
  //   };
  //   useEffect(() => {
  //     if (AsyncStorage.getItem('user-token')) {
  //       getTrans();
  //     }
  //   }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ListItem bottomDivider margin={5}>
            <Icon name="money" color="blue" size={25} />
            <ListItem.Content>
              <ListItem.Title style={{color: 'black', fontSize: 15}}>
                Transaction ID : 546987456321
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 15,
                  margin: 3,
                  fontWeight: '600',
                }}>
                INR: ₹5000
                {/* Amount : {tra?.amount} */}
              </ListItem.Subtitle>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Date : 12-05-2022
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider margin={5}>
            <Icon name="money" color="blue" size={25} />
            <ListItem.Content>
              <ListItem.Title style={{color: 'black', fontSize: 15}}>
                Transaction ID : 546987456321
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 15,
                  margin: 3,
                  fontWeight: '600',
                }}>
                INR: ₹5000
                {/* Amount : {tra?.amount} */}
              </ListItem.Subtitle>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Date : 12-05-2022
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider margin={5}>
            <Icon name="money" color="blue" size={25} />
            <ListItem.Content>
              <ListItem.Title style={{color: 'black', fontSize: 15}}>
                Transaction ID : 546987456321
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 15,
                  margin: 3,
                  fontWeight: '600',
                }}>
                INR: ₹5000
                {/* Amount : {tra?.amount} */}
              </ListItem.Subtitle>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Date : 12-05-2022
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider margin={5}>
            <Icon name="money" color="blue" size={25} />
            <ListItem.Content>
              <ListItem.Title style={{color: 'black', fontSize: 15}}>
                Transaction ID : 546987456321
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 15,
                  margin: 3,
                  fontWeight: '600',
                }}>
                INR: ₹5000
                {/* Amount : {tra?.amount} */}
              </ListItem.Subtitle>
              <ListItem.Subtitle
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Date : 12-05-2022
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  transation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B008B',
  },
  transText: {
    color: 'white',
    fontSize: 25,
  },
});
