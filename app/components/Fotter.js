import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { BottomNavigation } from 'react-native-material-ui';
import {MODES} from "../../constants/index";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        console.log("props", this.props);
    }

    render() {
        return (
            <BottomNavigation  mode={MODES.SCHEDULE} hidden={false} >
                <BottomNavigation.Action
                    key="schedule"
                    icon="schedule"
                    label="schedule"
                    onPress={this.props.changeTab}
                />
                <BottomNavigation.Action
                    key="work"
                    icon="work"
                    label="Trainings"
                    // onPress={() => this.setState({ active: 'people' })}
                />
                <BottomNavigation.Action
                    key="tasks"
                    icon="today"
                    label="Exercises"
                    // onPress={() => this.setState({ active: 'bookmark-border' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    // onPress={() => this.setState({ active: 'settings' })}
                />
            </BottomNavigation>
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