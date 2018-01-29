import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Setting extends Component {
    render() {
        return ( 
        <View>
            <Text>
                {this.props.setting.name}
            </Text>
            <Text>
                {String(this.props.setting.value)}
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

export default Setting;
