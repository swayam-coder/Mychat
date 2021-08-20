import React from 'react';
import Login from './Login';
import { BrowserRouter , Switch ,Route } from 'react-router-dom';
import { Authcontext } from '../contexts/Authcontext';
import Chats from "./Chats";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Authcontext>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/chat" component={Chats} />
                </Switch>
            </Authcontext>
        </BrowserRouter>
        </>
    )
}
