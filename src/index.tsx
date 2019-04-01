import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import UserStore from './stores/user';

const user = new UserStore();
ReactDOM.render(
    <Provider user={user}>
        <App />
    </Provider>, document.getElementById('root')
);
