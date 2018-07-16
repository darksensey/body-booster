import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
          <View key={this.props.keyval} onSwipeLeft={this.props.deleteMethod}>
              <Text style={styles.noteText}>{this.props.val.date}</Text>
              <Text style={styles.noteDate}>{this.props.val.note}</Text>
              {/*<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>*/}
                  {/*<Icon name="person"/>*/}
              {/*</TouchableOpacity>*/}
          </View>
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