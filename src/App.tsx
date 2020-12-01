import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import RouterConfig from './router/index';
import "./less/index.less"
export default function App() {
    return (
        <Provider store={store}>
            <RouterConfig />
        </Provider>
    );
}
