"use strict";

module.exports = {
    comment: "\n/**\n * Generated With Arch CLI\n * https://github.com/Archipelcorp/archrn-cli\n * @flow\n */\n",
    head: "\n\nimport React, { Component } from 'react';\nimport {\nPlatform,\nStyleSheet,\nText,\nView\n} from 'react-native';\n\n\n",
    body: "\n    render() {\n        return (\n            <View style={styles.container}>\n            <Text style={styles.welcome}>\n                Welcome to Your New Component!\n            </Text>\n            <Text style={styles.instructions}>\n                To get started, edit this file\n            </Text>\n            </View>\n        );\n    }\n\n",
    tail: "\n\n}\n\nconst styles = StyleSheet.create({\n    container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    },\n    welcome: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n    },\n});    \n"

};