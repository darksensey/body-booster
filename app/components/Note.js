import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
          <View key={this.props.keyval} style={styles.note}>
              <Text style={styles.noteText}>{this.props.val.date}</Text>
              <Text style={styles.noteText}>{this.props.val.note}</Text>
              <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                  <Text>D</Text>
              </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {},
    noteText: {},
    deleteMethod: {},
    noteDelete: {}
});