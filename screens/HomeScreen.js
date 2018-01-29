import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { user } from '../data.service';
import ContainerStyles from '../styles';

const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.header1}>
    Spending Power
    </Text>
    <Text style={styles.photo}>
      ${user.spendingPower}
    </Text>
    <Text style={styles.header1}>
    {user.goals[0].name}
    </Text>
    <Text style={styles.photo}>
      ${user.goals[0].total}
    </Text>
    <Text style={styles.text}>
      You are 50% towards your goal
    </Text>
  </ScrollView>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'HomeScreen',
});

const styles = StyleSheet.create(ContainerStyles);

export default HomeScreen;
