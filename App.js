/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleName = value => {
    setName(value);
  };

  const onPressSubmit = () => {
    setSubmitted(!submitted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your name:</Text>
      <TextInput
        placeholder="e. g. Pravin"
        style={styles.textInput}
        value={name}
        onChangeText={handleName}
        keyboardType="default"
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressSubmit}
        // disabled={submitted}
        color="#0ff"
      // /> */}

      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressSubmit}
        activeOpacity={0.5}
        underlayColor="#fff">
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}

      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#fff' : '#00ffff',
          },
        ]}
        delayLongPress={2000}
        android_ripple={{color: '#00ff'}}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
        onPress={onPressSubmit}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You register as: {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff10f',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#00ffff',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
  },
});

export default App;
