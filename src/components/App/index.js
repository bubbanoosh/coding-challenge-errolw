import React from 'react'
import { Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';

import Navigation from '../Common/Navigation'
import Header from '../Common/Header'
import Home from '../Home'
import CodingChallenge from '../CodingChallenge'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            ...red,
            A700: '#D50000',
        },
        secondary: {
            ...grey,
            A400: '#00e677',
        },
        error: red,
    },
    root: {
        width: '100%',
        padding: '1.5rem'
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: '1rem',
        marginRight: 200,
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <div>
            <Navigation theme={theme} />
            <Header theme={theme} />

            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/coding-challenge" component={CodingChallenge} />
            </main>
        </div>
    </MuiThemeProvider>
)

export default App;