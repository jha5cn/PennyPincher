import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import { user } from '../data.service';
import Account from '../components/Account'

class AccountScreen extends Component {
    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            {this.renderAccounts()}
        </ScrollView>
        )
    }

    renderAccounts() {
        return user.accounts.map(account => {
            return (
                <Account
                    key={account.id}
                    account={account}
                />
            )
        })
    }
}

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
