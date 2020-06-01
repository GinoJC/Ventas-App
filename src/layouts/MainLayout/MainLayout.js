import React from 'react';
import {Grid} from "semantic-ui-react";
import {BrowserRouter as Router} from "react-router-dom";
import MenuLeft from "../../components/MenuLeft";
import TopBar from "../../components/TopBar";
import ContentCenter from "../../components/ContentCenter";

import "./MainLayout.scss";

export default function MainLayout() {
    return (
        <Router>
            <Grid className="main-layout">
                <Grid.Row>
                    <Grid.Column width={16}>
                        <TopBar/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <MenuLeft/>
                    </Grid.Column>
                    <Grid.Column className="content" width={13}>
                        <ContentCenter/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    )
}
