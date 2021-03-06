import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}
