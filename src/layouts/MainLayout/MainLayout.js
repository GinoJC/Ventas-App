import React from 'react';
import {Grid} from "semantic-ui-react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../../routes/Routes";
import MenuLeft from "../../components/MenuLeft";
import TopBar from "../../components/TopBar";
import ContentCenter from "../../components/ContentCenter";

import "./MainLayout.scss";

export default function MainLayout(props) {
    const {user, setReloadApp} = props;

    return (
        <Router>
            <Grid className="main-layout">
                <Grid.Row>
                    <Grid.Column className="top-bar" width={16}>
                        <TopBar user={user}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="contentCenter" width={16}>
                        <Routes user={user} setReloadApp={setReloadApp}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    )
}
