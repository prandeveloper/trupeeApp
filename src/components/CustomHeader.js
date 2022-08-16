import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-datepicker';
function CustomHeader({title, navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(date);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 0,
        height: 100,
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
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
        <TouchableOpacity style={styles.calender} onPress={() => setOpen(true)}>
          <DatePicker
            open={open}
            date={date}
            mode="date"
            format="YYYY-MM-DD"
            // minDate="2016-05-01"
            // maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={setDate}
            showIcon={false}
            hideText={true}
            customStyles={{
              dateTouchBody: {position: 'relative'},
            }}
          />
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
              <Text style={styles.calenderText}>10-02-2022</Text>
            </View>
          </View>
          {/* <DatePicker
            textColor="green"
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
        </TouchableOpacity>
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
    borderColor: '#fff',
    borderRadius: 5,
  },
});

export default CustomHeader;
