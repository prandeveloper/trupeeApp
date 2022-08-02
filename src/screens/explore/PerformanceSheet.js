import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Text} from 'react-native-paper';

const PerformanceSheet = () => {
  const [items, setItems] = React.useState([
    {name: 'April, 2021', onprice: 'FREE'},
    {name: 'May, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'June, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'July, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'August, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'September, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'October, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'November, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'December, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'January, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'February, 2021', onprice: '₹99', offprice: '₹249'},
    {name: 'March, 2021', onprice: '₹99', offprice: '₹249'},
  ]);
  return (
    <SafeAreaView>
      <View>
        <View>
          <TouchableOpacity style={styles.touchtop}>
            <Text variant="headlineLarge" style={{color: '#fff'}}>
              Download Monthly Performance sheet and track our entire trade
              calls historty
            </Text>
            <Text variant="headlineLarge" style={{color: '#fff'}}>
              Download Monthly Performance sheet and track our entire trade
              calls historty
            </Text>
            <Text variant="headlineLarge" style={{color: '#fff'}}>
              Download Monthly Performance sheet and track our entire trade
              calls historty
            </Text>
            <Text variant="headlineLarge" style={{color: '#fff'}}>
              Download Monthly Performance sheet and track our entire trade
              calls historty
            </Text>
          </TouchableOpacity>
        </View>
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          //staticDimension={450}
          //fixed
          spacing={10}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemPrice}>{item.onprice}</Text>
                <Text style={styles.itemPriceOff}>{item.offprice}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default PerformanceSheet;

const styles = StyleSheet.create({
  touchtop: {
    backgroundColor: '#3498db',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    height: 80,
    borderWidth: 3,
    borderColor: '#bdc3c7',
  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
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
});
