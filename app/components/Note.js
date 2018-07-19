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
    }

    render() {
        return (
            <GestureRecognizer
                onSwipeLeft={this.props.deleteMethod}
                style={styles.wrapper}
            >
                <View key={this.props.keyval} >
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
        height: 50,
        width: '100%',
        flex: 1,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    noteText: {
        color: '#0c0c0c',
        fontSize: 15
    },
    noteDate: {
        color: '#4c4c4c',
        fontSize: 13,
    },
    deleteMethod: {},
    noteDelete: {}
});