import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const LoginScreen = ({ navigation }) => (
  <ScrollView>
    <Text>
        Login
    </Text>
    <Text>
        Email
    </Text>
    <TextInput/>
    <Text>
        Password
    </Text>
    <TextInput/>
    <TouchableOpacity>
        <Text>
            Submit
        </Text>
    </TouchableOpacity>
  </ScrollView>
);

/*
const AppBarLeft = ({ navigation }) => (
  <View style={styles.headerLeft}>
    <TouchableOpacity
      onPress={() => navigation.navigate('DrawerOpen')}
    >
      { menuIcon }
    </TouchableOpacity>
  </View>
);*/

LoginScreen.navigationOptions = ({ navigation }) => ({
  title: 'LoginScreen',
});

export default LoginScreen;
