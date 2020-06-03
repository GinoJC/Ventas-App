import React from 'react';
import {Switch, Route} from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Settings from "../pages/Settings";

export default function Routes(props) {
    const {user, setReloadApp} = props;

    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/auth" exact>
                <Auth/>
            </Route>
            <Route path="/settings" exact>
                <Settings user={user} setReloadApp={setReloadApp}/>
            </Route>
        </Switch>
    )
}
