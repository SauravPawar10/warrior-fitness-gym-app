import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import img from '../../assets/images/login-1.jpeg';
import logo from '../../assets/images/logo.jpeg';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Image style={{height: '60%', position: 'relative'}} source={img} />
      <View
        style={{
          marginHorizontal: 20,
          // position: "absolute",
          // top:0,
          // bottom:100,
          marginTop: -100,
          backgroundColor: 'orange',
          borderRadius: 4,

          // flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 20,
          borderRadius: 20,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 16}}>
          <Image
            source={logo}
            style={{height: 60, width: 60, borderRadius: 60}}
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 16,
          }}>
          Welcome To Warrior Fitness Gym App
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 19,
            paddingBottom: 16,
          }}>
          Deliver your order around world without hesitation.
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 16,
            borderRadius: 30,
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
