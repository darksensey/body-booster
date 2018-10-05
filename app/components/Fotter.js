import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import { BottomNavigation } from 'react-native-material-ui';
import {MODES} from "../../constants/index";
import PropTypes from 'prop-types';

const AppFooter = ({mode = MODES.SCHEDULE, setMode = () => {}}) => (
    <BottomNavigation  active = {mode} hidden={false} >
        <BottomNavigation.Action
            key="SCHEDULE"
            icon="schedule"
            label="schedule"
            onPress={() => setMode(MODES.SCHEDULE)}
        />
        <BottomNavigation.Action
            key="TRAININGS"
            icon="work"
            label="Trainings"
            onPress={() => setMode(MODES.TRAININGS) }
        />
        <BottomNavigation.Action
            key="EXERCISES"
            icon="today"
            label="Exercises"
            onPress={() => setMode(MODES.EXERCISES) }
        />
        <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
        />
    </BottomNavigation>
);
export default AppFooter;

AppFooter.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

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