/**
 * Descriptions：主界面
 * <p>
 * Author：ChenME
 * Date：2016/12/18
 * Email：ibelieve1210@163.com
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default class HomeUI extends Component {
    constructor(props) {
        super(props);
    }

    _goBack = ()=> {
        const {navigator}=this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this._goBack.bind(this)}>
                    ChenME
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#F5FCFF',
        alignItems: "center",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "left",
        color: "#333",
        marginBottom: 5,
    }
});