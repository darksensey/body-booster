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
import { Toolbar } from 'react-native-material-ui';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [{'date': 'test 2', 'note': 'test Note'}],
            noteText: '',
        };
    }

    onSwipeUp(gestureState) {
        this.setState({myText: 'You swiped up!'});
    }

    onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
    }

    onSwipeLeft(gestureState) {
        alert('swipe');
    }

    onSwipeRight(gestureState) {
        this.setState({myText: 'You swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: 'yellow'});
                break;
        }
    }

    render() {
        let notes = this.state.noteArray.map((key, val)=>{
            return <Note key={key} val={key} keyval={key} onSwipeLeft={()=> this.deleteNote(key)} />
        });

        return (
          <View style={styles.container}>
              <Toolbar
                  leftElement="menu"
                  centerElement="Searchable"
                  searchable={{
                      autoFocus: true,
                      placeholder: 'Search',
                  }}
                  rightElement={{
                      menu: {
                          icon: "more-vert",
                          labels: ["item 1", "item 2"]
                      }
                  }}
                  onRightElementPress={ (label) => { console.log(label) }}
              />

              <ScrollView style={styles.scrollView} onSwipeLeft={()=> this.deleteNote(key)}>
                  {notes}
              </ScrollView>
              <View style={styles.bottombar}>
                  <TextInput
                      style={styles.bottombarTextInput}
                      placeholder="Exercise"
                      placeholderTextColor="white"
                      underlineColorAndroid='transparent'
                      onChangeText={(noteText) => this.setState({noteText})}
                      value={this.state.noteText}
                  />
              </View>
              <TouchableOpacity onPress={ this.addNote.bind(this) }
                                style={ styles.addBtn }><Text style={styles.testAddBtn}>Add</Text></TouchableOpacity>
          </View>
        );
    }
    addNote() {
        if (this.state.noteText) {
            let d = new Date();
            this.state.noteArray.push({'date': d.getFullYear() + '/' + d.getMonth() + '/' + d.getDay(), 'note': this.state.noteText});
            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText: ''});
        }
    }
    deleteNote(key) {
        alert('delete');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        height: '100%',
    },
    scrollView: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    bottombar: {
        flex: 1,
        width: '100%',
        height: 42,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1D1D1D'
    },
    bottombarTextInput: {
        height: 36,
        width: '90%',
        padding: 5,
        margin: 5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff'
    },
    addBtn: {
        position: 'absolute',
        bottom: 50,
        width: 60,
        height: 60,
        right: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#C00020",
    },
    testAddBtn: {
        color: '#fff'
    },
    toolbar: {
        flex: 1,
        width: '100%',
        height: 42,
        top: 0,
        backgroundColor: '#c0c0c0'
    }
});