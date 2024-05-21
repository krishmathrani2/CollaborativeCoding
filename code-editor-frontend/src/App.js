import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import CodeEditor from './components/CodeEditor';
import Login from './components/Login';
import Register from './components/Register';
import SessionList from './components/SessionList';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/sessions" component={SessionList} />
                    <Route path="/editor/:sessionId" component={CodeEditor} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
