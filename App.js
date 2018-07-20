import React from 'react';
import Main from './app/components/Main'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import {MODELS} from './constants/index';

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
    mode: MODELS.SCHEDULE
};
const store = createStore(reducers, initialState);

export default class App extends React.Component {

    render() {
        return (
                <ThemeContext.Provider value={getTheme(uiTheme)}>
                    <Provider store={store}>
                        <Main />
                    </Provider>

                </ThemeContext.Provider>
        );
    }
}