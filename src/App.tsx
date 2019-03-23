import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import styled from 'styled-components'

import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Base>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Base>
            </Router>
        );
    }
}

const Base = styled.div``;
