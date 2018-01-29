import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Account extends Component {
    render() {
        return ( 
        <View>
            <Text>
                {this.props.account.name}
            </Text>
            <Text>
                {this.props.account.type}
            </Text>
            <Text>
                {this.props.account.currentBalance}
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

export default Account;