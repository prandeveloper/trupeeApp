import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';
import axiosConfig from '../../../axiosConfig';

const MemberPlan = () => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const getPlan = () => {
      axiosConfig
        .get(`/plan_list`)
        .then(response => {
          console.log(response.data.data);
          setPlan(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getPlan();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <View style={styles.textView}>
          <Text style={styles.oneText}>Select Package to Activate Service</Text>
        </View>
        <View style={styles.textView}>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <View style={[styles.card, {backgroundColor: '#c0d4a3'}]}>
                <Text style={styles.textcard}>Free Weekly</Text>
                {/* <Text style={styles.textcard}>₹{item?.des_price}</Text>
                <Text style={styles.textcard}>₹ {item?.mrp_price}</Text>
                <Text style={styles.offText}>{item?.desc}</Text> */}
              </View>
            </TouchableOpacity>
            {plan?.map(item => (
              <TouchableOpacity>
                <View style={[styles.card, {backgroundColor: '#c0d4a3'}]}>
                  <Text style={styles.textcard}>{item?.pack_name}</Text>
                  <Text style={styles.textcard}>₹{item?.des_price}</Text>
                  <Text style={styles.textcard1}>₹ {item?.mrp_price}</Text>
                  <Text style={styles.offText}>{item?.desc}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MemberPlan;

const styles = StyleSheet.create({
  textView: {
    margin: 5,
  },
  oneText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 130,

    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  textcard: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  textcard1: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
    textDecorationLine: 'line-through',
    textDecorationColor: '#000',
  },
  offText: {
    backgroundColor: '#a82682',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
