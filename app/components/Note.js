import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeLeft={() => this.props.deleteMethod}
            >
                <View key={this.props.keyval}>
                    <Text style={styles.noteText}>{this.props.val.date}</Text>
                    <Text style={styles.noteDate}>{this.props.val.note}</Text>
                </View>
            </GestureRecognizer>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 5,
        height: 40,
        width: '100%',
        backgroundColor: '#FDF686',
        flex: 1,
    },
    noteText: {
        color: '#0c0c0c'
    },
    noteDate: {
        color: '#4c4c4c',
        fontSize: 10
    },
    deleteMethod: {},
    noteDelete: {}
});