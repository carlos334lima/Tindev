import React, { useEffect, useState } from 'react'
/* import io from 'socket.io-client' */
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


import api from '../services/api.js'

import logo from '../assets/logo.png'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import itsamatch from '../assets/itsamatch.png'

export default function Main() {}




const styles =  StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'space-between'
  },

  logo: {
      marginTop: 20
  },

  cardsContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      maxHeight: 500
  },

  card: {
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 8,
      margin: 30,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },

  avatar: {
      flex: 1,
      height: 300,
      backgroundColor: '#DDD'
  },

  footer: {
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 15
  },

  name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333'
  },

  bio: {
      fontSize: 14,
      color: '#999',
      marginTop: 5,
      lineHeight: 18
  },

  buttonsContainer: {
      flexDirection: 'row',
      marginBottom: 30
  },
  button: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 2,
      shadowOffset: {
          width: 0,
          height: 2,
      }
  },

  matchContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'center',
      alignItems: 'center'
  },

  matchImage: {
      height: 60,
      resizeMode: 'contain'
  },

  matchAvatar: {
      width: 160,
      height: 160,
      borderRadius: 80,
      borderWidth: 5,
      borderColor: '#FFF',
      marginVertical: 30
  },

  matchName: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#FFF'
  },

  matchBio: {
      marginTop: 10,
      fontSize: 16,
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 24,
      textAlign: 'center',
      paddingHorizontal: 30
  },

  closeMatch: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.8)',
      textAlign: 'center',
      marginTop: 30,
      fontWeight: 'bold'
  }
})