import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        };
    }
    render() {
        let notes = this.state.noteArray.map((key, val)=>{
           return <Note key={key} keyval={val}
           deleteMethod={()=> this.deleteNote(key)} />
        });

        return (
          <View style={styles.container}>
              <ScrollView>

              </ScrollView>
              <View style={style.footerWrapp}>
                  <TextInput
                      style={{height: 40}}
                      placeholder="Exercise"
                      placeholderTextColor="white"
                      underlineColorAndroid='transparent'
                      onChangeText={(noteText) => this.setState({noteText})}
                      value={this.state.noteText}
                  />
              </View>
              <TouchableOpacity onPress={ this.addNote.bind(this) }><Text>Add</Text></TouchableOpacity>

          </View>
        );
    }
    addNote() {
        alert('text');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    footerWrapp: {
    }
});