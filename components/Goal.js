import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Goal extends Component {
    render() {
        return ( 
        <View>
            <Text>
                {this.props.goal.name}
            </Text>
            <Text>
                {this.props.goal.total}
            </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10
    },
});

export default Goal;
