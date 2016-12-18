/**
 * Descriptions：Button组件
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
    TouchableWithoutFeedback,
} from "react-native";

export default class ButtonView extends Component {
    constructor(props) {
        super(props);
    }

    _handlePress = ()=> {
        if (this.props.enabled && this.props.onPress) {
            //按钮可以按下没有变灰则启用按钮的onPress()方法
            this.props.onPress();
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this._handlePress}
            >
                <View style={[styles.button, this.props.enabled ? {} : styles.buttonDisabled]}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    },
    buttonDisabled: {
        backgroundColor: 'black',
        opacity: 0.5,
    },
    buttonText: {
        color: 'white',
    },
});