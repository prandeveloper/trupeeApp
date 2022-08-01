import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const University = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.mainView}>
            <View>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
              />
            </View>
            <View style={styles.centerText}>
              <Text style={styles.textCenter}>
                Falling wedge pattern in BHEL
              </Text>
            </View>
            <View>
              <Text style={styles.rightText}>Stock Name: BHEL</Text>
              <Text style={styles.rightText}>
                Chart Pattern: Falling wedge Pattern
              </Text>
              <Text style={styles.rightText}>Time Frame: 1D</Text>
              <Text style={styles.rightText}>BreakOut Entry : @53-54+</Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <View>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
              />
            </View>
            <View style={styles.centerText}>
              <Text style={styles.textCenter}>
                Falling wedge pattern in BHEL
              </Text>
            </View>
            <View>
              <Text style={styles.rightText}>Stock Name: BHEL</Text>
              <Text style={styles.rightText}>
                Chart Pattern: Falling wedge Pattern
              </Text>
              <Text style={styles.rightText}>Time Frame: 1D</Text>
              <Text style={styles.rightText}>BreakOut Entry : @53-54+</Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <View>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
              />
            </View>
            <View style={styles.centerText}>
              <Text style={styles.textCenter}>
                Falling wedge pattern in BHEL
              </Text>
            </View>
            <View>
              <Text style={styles.rightText}>Stock Name: BHEL</Text>
              <Text style={styles.rightText}>
                Chart Pattern: Falling wedge Pattern
              </Text>
              <Text style={styles.rightText}>Time Frame: 1D</Text>
              <Text style={styles.rightText}>BreakOut Entry : @53-54+</Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <View>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
              />
            </View>
            <View style={styles.centerText}>
              <Text style={styles.textCenter}>
                Falling wedge pattern in BHEL
              </Text>
            </View>
            <View>
              <Text style={styles.rightText}>Stock Name: BHEL</Text>
              <Text style={styles.rightText}>
                Chart Pattern: Falling wedge Pattern
              </Text>
              <Text style={styles.rightText}>Time Frame: 1D</Text>
              <Text style={styles.rightText}>BreakOut Entry : @53-54+</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default University;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  centerText: {
    alignItems: 'center',
    margin: 5,
  },
  textCenter: {
    color: '#000',
    fontWeight: '600',
  },
  rightText: {
    color: '#000',
  },
});
