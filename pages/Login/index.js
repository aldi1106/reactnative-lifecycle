/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  Alert,
} from 'react-native';

import {
  Input,
  Button,
  Icon,
  SocialIcon,
} from 'react-native-elements';

import { LogoInalum } from '../../assets/icon';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [stt1, setStt1] = useState(false);

  const [password, setPassword] = useState('');
  const [stt2, setStt2] = useState(false);

  const handleLogin = () => {
    if (username !== 'admin') {
      setStt1(true);
      setStt2(false);
    } else if (password !== 'admin123') {
      setStt1(false);
      setStt2(true);
    } else {
      setStt1(false);
      setStt2(false);
      navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f00" />
      <Image
        source={LogoInalum}
        style={style.strach}
        resizeMode="contain"
      />
      <Input
        placeholder="Username"
        rightIcon={(
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
        )}
        value={username}
        errorStyle={{ color: 'red' }}
        errorMessage={(stt1 ? 'Username Salah' : '')}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        placeholder="Password"
        rightIcon={(
          <Icon
            name="lock"
            type="font-awesome"
            size={24}
            color="#273c75"
          />
        )}
        value={password}
        errorStyle={{ color: 'red' }}
        errorMessage={(stt2 ? 'Username Salah' : '')}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        icon={{
          name: 'login',
          type: 'entypo',
          size: 24,
          color: '#7f8fa6',
        }}
        iconRight
        title="Sign In"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ backgroundColor: '#273c75' }}
        onPress={() => handleLogin()}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  liner: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3',
    marginTop: 15,
    marginBottom: 10,
  },
  strach: {
    width: '70%',
    height: 200,
  },
});

export default Login;
