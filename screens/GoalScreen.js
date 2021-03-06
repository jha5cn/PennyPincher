import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet,
  FlatList
} from 'react-native';
import { user } from '../data.service';
import Goal from '../components/Goal'

class GoalScreen extends Component {
  render() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
      {this.renderGoals()}
    </ScrollView>
    )
  }

    renderGoals() {
        return user.goals.map(goal => {
            return (
            <Goal
                key={goal.id}
                goal={goal}
            />
            )
        })
    }
}

/*
<FlatList
        data={user.goals}
        renderItem={(goal) => <ListItem title={goal.name} />}
      />*/

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: 'Goal',
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

export default GoalScreen;
