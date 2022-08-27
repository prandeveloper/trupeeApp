import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Text, TextInput} from 'react-native-paper';
import axiosConfig from '../../../axiosConfig';

const PerformanceSheet = () => {
  const [email, setEmail] = React.useState('');
  const [items, setItems] = React.useState([
    // {name: 'April, 2021', onprice: 'FREE'},
    // {name: 'May, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'June, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'July, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'August, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'September, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'October, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'November, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'December, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'January, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'February, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'March, 2021', onprice: '₹99', offprice: '₹249'},
    // {name: 'All Performance Sheet', onprice: '₹99', offprice: '₹249'},
  ]);

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
  //  const handleOnpress = item => {
  //    const newItem = sports.map(val => {
  //      if (val.id === item.id) {
  //        return {...val, selected: !val.selected};
  //      } else {
  //        return val;
  //      }
  //    });

  //    setSports(newItem);
  //    console.log(newItem);
  //  };
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
                style={styles.gridView}
                staticDimension={450}
                spacing={8}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.itemContainer}>
                    <Text style={styles.itemName}>
                      {item?.month}, {item?.year}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.itemPrice}>{item.plan_price}</Text>
                      <Text style={styles.itemPriceOff}>{item.offprice}</Text>
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
    borderWidth: 2,
    borderColor: '#bdc3c7',
  },
  itemName: {
    fontSize: 12,
    color: '#000',
    fontWeight: '700',
  },
  itemPrice: {
    fontWeight: '600',
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
