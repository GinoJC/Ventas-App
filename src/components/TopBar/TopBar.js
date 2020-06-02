import React from 'react';
import {Button, Icon, Image, Input} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";

import "./TopBar.scss";

export default function TopBar() {
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
                <Icon name="user"/>
            </div>
        </div>
    )
}
