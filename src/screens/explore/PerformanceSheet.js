import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Text, TextInput} from 'react-native-paper';
import axiosConfig from '../../../axiosConfig';
import axios from 'axios';

const PerformanceSheet = () => {
  const [email, setEmail] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedId, setSelectedId] = useState([]);

  // <=============Performance get Api ============>
  useEffect(() => {
    getDate();
  }, []);
  const getDate = () => {
    axiosConfig(`/getPerSheet`)
      .then(response => {
        const items = response.data.data;
        setItems(items);
        console.log(items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Post api
  const postData = () => {
    axios
      .post(`http://65.0.183.149:8000/user/ad_user_persheet`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSelection = _id => {
    var selectedId = selectedId;

    if (selectedId === _id) setSelectedItem(null);
    else setSelectedItem(_id);
    console.log(_id);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <TouchableOpacity style={styles.touchtop}>
              <Text
                variant="displayMedium"
                style={{color: '#fff', marginBottom: 8}}>
                Download Monthly Performance sheet and track our entire trade
                calls historty
              </Text>
              <Text variant="bodyLarge" style={{color: '#fff'}}>
                History Seperate According to
              </Text>
              <Text
                variant="headlineLarge"
                style={{color: '#fff', marginBottom: 5}}>
                Index FNO | Equity FNO | Equity Cash calls
              </Text>
              <Text
                variant="headlineLarge"
                style={{color: '#fff', marginBottom: 5}}>
                Get Entire of all the trades for a particular month
              </Text>
              <Text
                variant="headlineLarge"
                style={{color: '#fff', marginBottom: 5}}>
                Trade results calculated considering even if you exit your
                entire position on first target
              </Text>
              <Text
                variant="headlineLarge"
                style={{color: '#fff', marginBottom: 5}}>
                Track Monthly minimum average returns through our calls
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.listHeading}>Get Monthly Performance of</Text>
            </View>
            <ScrollView horizontal={true}>
              <FlatGrid
                itemDimension={110}
                data={items}
                extraData={selectedId}
                style={styles.gridView}
                staticDimension={450}
                spacing={8}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleSelection(item._id)}
                    style={
                      item._id === selectedItem
                        ? styles.itemContainer
                        : styles.itemContainer2
                    }>
                    <Text style={styles.itemName}>
                      {item?.month}, {item?.year}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.itemPrice}>₹{item.dst_price}</Text>
                      <Text style={styles.itemPriceOff}>₹{item.mrp}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.listHeading}>Send Performance Sheet on</Text>
            </View>
            <View>
              <TextInput
                style={[styles.tfield, {width: 300}]}
                label="Email"
                outlineColor="green"
                mode="outlined"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={styles.section1}>
            <TouchableOpacity style={styles.touchButton}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerformanceSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 8,
  },
  section: {
    margin: 0,
  },

  touchtop: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 10,
  },
  listHeading: {
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
    marginVertical: 10,
  },
  gridView: {
    margin: 0,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    height: 60,
    borderWidth: 3,
    borderColor: '#000',
  },
  itemContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    height: 60,
    borderWidth: 2,
    borderColor: '#bdc3c7',
  },
  itemName: {
    fontSize: 12,
    color: '#000',
    fontWeight: '700',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
    margin: 2,
  },
  itemPriceOff: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
    margin: 2,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  tfield: {
    borderWidth: 0,

    borderRadius: 10,
    marginVertical: 0,
  },
  section1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    margin: 15,
  },
  touchButton: {},
  buttonText: {
    backgroundColor: 'blue',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    fontWeight: '700',
    borderRadius: 10,
  },
});
