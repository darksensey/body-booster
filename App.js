import React from 'react';
import Main from './app/components/Main'
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

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

export default class App extends React.Component {

    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <Main />
            </ThemeContext.Provider>
        );
    }
}