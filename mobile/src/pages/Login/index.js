import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAvoidingView, StyleSheet, Platform, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import api from '../services/api.js'

import logo from '../assets/logo.png'

export default function Login() {}







const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
  },
  input: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 4,
      marginTop: 20,
      paddingHorizontal: 15
  },
  button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#DF4723',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16
  }
})