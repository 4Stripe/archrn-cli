module.exports = {
    comment:
`
/**
 * Generated With Arch CLI
 * https://github.com/Archipelcorp/archrn-cli
 * @flow
 */
`,
    head: 
`

import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View
} from 'react-native';


`,
    body: 
`
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to Your New Component!
            </Text>
            <Text style={styles.instructions}>
                To get started, edit this file
            </Text>
            </View>
        );
    }

`,
    tail: 
`

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
});    
`


};
