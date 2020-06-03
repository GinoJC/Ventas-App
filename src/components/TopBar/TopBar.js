import React from 'react';
import {Button, Icon, Image, Input} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import UserImage from "../../assets/png/user.png";

import "./TopBar.scss";

function TopBar(props) {
    const {user} = props;

    return (
        <div className="top-bar">
            <div className="top-bar_left">
                <Icon name="align justify"/>
            </div>
            <div className="top-bar_search">
                <Input icon='search' placeholder="Buscar..."/>
            </div>
            <div className="top-bar_right">
                <Icon name="shopping cart"/>
                
                    <Image src={UserImage} href="/auth"/>
                    Iniciar Sesion

            </div>
        </div>
    )
}

export default withRouter(TopBar);