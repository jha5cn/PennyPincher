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

const title = lighthouses[1].title;
const content = lighthouses[1].content;
const image = lighthouses[1].image;
const photo = lighthouses[1].photo;
const photoUrl = lighthouses[1].url;

const AccountScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Bank Accounts</Text>
      <Text style={styles.p}>account 1</Text>
      <Text style={styles.p}>account 2</Text>
      <Text style={styles.p}>account 3</Text>
      <Text style={styles.h1}>Credit Cards</Text>
      <Text style={styles.p}>card 1</Text>
      <Text style={styles.p}>card 2</Text>
      <Text style={styles.p}>card 3</Text>
  </ScrollView>
);

AccountScreen.navigationOptions = ({ navigation }) => ({
  title: 'Accounts',
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

export default AccountScreen;
