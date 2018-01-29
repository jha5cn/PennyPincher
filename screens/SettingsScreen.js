import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import { lighthouses } from '../data.service';

const title = lighthouses[2].title;
const content = lighthouses[2].content;
const image = lighthouses[2].image;
const photo = lighthouses[2].photo;
const photoUrl = lighthouses[2].url;

const SettingsScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Settings</Text>
      <Text style={styles.p}>setting 1</Text>
      <Text style={styles.p}>setting 2</Text>
      <Text style={styles.p}>setting 3</Text>
  </ScrollView>
);

SettingsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Settings',
});

const styles = StyleSheet.create({
    view: {
      marginTop: 20,
      padding: 20
    },
    h1: {
      fontSize: 22,
      alignSelf: 'center',
      marginBottom: 20
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10
    },
    p: {
      textAlign: 'left',
      marginBottom: 20
    },
    linkCredits: {
      fontStyle: 'italic',
      color: '#2962FF'
    },
    social: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 10
    },
    signature: {
      fontSize: 16,
      marginBottom: 4,
    },
    position: {
      fontSize: 16,
      marginBottom: 10,
    },
    link: {
      fontSize: 16,
      color: '#2962FF'
    }
  });
  
export default SettingsScreen;
