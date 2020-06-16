import React, {useState} from 'react';
import {Grid} from "semantic-ui-react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../../routes/Routes";
import TopBar from "../../components/TopBar";
import firebase from '../../utils/Firebase';
import 'firebase/auth';

import "./MainLayout.scss";

export default function MainLayout(props) {
    const {setReloadApp} = props;
    const [user, setUser] = useState(initialValueUser());

    firebase.auth().onAuthStateChanged(currentUser => {

		if(!currentUser){
            console.log("usuario no logueado");
            
			setUser(null);
		}else{
            console.log("usuario logueado");
            console.log(currentUser);
            
			setUser(currentUser);
		}
	});

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
                <Grid.Row>
                    <Grid.Column className="footer" width={16}>
                        footer
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    )
}

function initialValueUser() {
    return {
        email: "",
        password: "",
        username: "",
        photoURL: ""
    }
}