import React from 'react';
import {Grid} from "semantic-ui-react";
import {BrowserRouter as Router} from "react-router-dom";
import MenuLeft from "../../components/MenuLeft";
import TopBar from "../../components/TopBar";
import ContentCenter from "../../components/ContentCenter";

import "./MainLayout.scss";

export default function MainLayout() {
    return (
        <div className="main-layout">
            <div className="top-bar">
                <TopBar/>
            </div>
            <div className="content">
                <aside>
                    <MenuLeft/>
                </aside>
                <selection className="contentCenter">
                    <ContentCenter/>
                </selection>
            </div>
        </div>
    )
}
