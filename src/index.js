import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './index.scss';
const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: "rgba(35,153,240,.5)",
      },
    },
  });
ReactDOM.render(
    <MuiThemeProvider theme={muiTheme}>
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
