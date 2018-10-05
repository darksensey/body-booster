import React from 'react';
import Main from './app/components/Main'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import {MODES} from './constants/index';

import { createStackNavigator } from 'react-navigation';

const AppStackNavigator = new createStackNavigator({
    HomeScreen: {screen: Main},
});

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const initialState = {
    mode: MODES.SCHEDULE,
};

const store = createStore(reducers, initialState);

export default class App extends React.Component {

    render() {
        return (
                <ThemeContext.Provider value={getTheme(uiTheme)}>
                    <Provider store={store}>
                        <AppStackNavigator />
                    </Provider>
                </ThemeContext.Provider>
        );
    }
}

