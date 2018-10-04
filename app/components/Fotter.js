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
//
// export default class Footer extends React.Component {
//     constructor(props) {
//         super(props);
//
//         console.log("props", this.props);
//     }
//
//     render() {
//         return (
//             <BottomNavigation  active={ this.props.active } hidden={false} >
//                 <BottomNavigation.Action
//                     key="SCHEDULE"
//                     icon="schedule"
//                     label="schedule"
//                     onPress={() => this.setState( {active: MODES.SCHEDULE}) }
//                 />
//                 <BottomNavigation.Action
//                     key="TRAININGS"
//                     icon="work"
//                     label="Trainings"
//                     onPress={() => this.setState( {active: MODES.TRAININGS}) }
//                 />
//                 <BottomNavigation.Action
//                     key="EXERCISES"
//                     icon="today"
//                     label="Exercises"
//                     onPress={() => this.setState( {active: MODES.EXERCISES}) }
//
//                 />
//                 <BottomNavigation.Action
//                     key="settings"
//                     icon="settings"
//                     label="Settings"
//
//                 />
//             </BottomNavigation>
//         );
//     }
//
// }

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