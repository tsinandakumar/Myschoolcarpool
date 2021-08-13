import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SignIn from '../../routes/SignIn';
import injectTapEventPlugin from 'react-tap-event-plugin';



//injectTapEventPlugin();

const App = () =>
    <BrowserRouter>
        <Switch>            
            <Route path="/login" component={SignIn} />            
            <Redirect to="/login" />
        </Switch>
    </BrowserRouter>;

export default App;
