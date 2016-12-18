/**
 * Descriptions：Like组件
 * <p>
 * Author：ChenME
 * Date：2016/12/17
 * Email：ibelieve1210@163.com
 */
import  React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

export default class LikeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
    }

    onClick = ()=> {
        this.setState({likes: this.state.likes+1});
    }

    render() {
        const thumbsUp = "\uD83D\uDC4D";
        return (
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={this.onClick} style={styles.likeBtn}>
                    <Text style={styles.likeText}>{thumbsUp + "Like"}</Text>
                </TouchableOpacity>
                <Text style={styles.likeText}>{this.state.likes + "个喜欢"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    likeContainer: {
        flexDirection: 'row',
        height:60,
    },

    likeBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        margin: 8,
        padding: 8,
    },

    likeText: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center',
    },
});