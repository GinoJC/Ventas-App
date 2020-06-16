import React, {useState} from 'react';
import AuthOptions from "../../components/Auth/AuthOptions";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";

import "./Auth.scss";

export default function Auth() {
    const [selectedForm, setSelectedForm] = useState(null);

    const handlerForm = () => {
        switch (selectedForm) {
            case "login":
                return <LoginForm setSelectedForm={setSelectedForm}/>;
            case "register":
                return <RegisterForm setSelectedForm={setSelectedForm}/>;
            default:
                return <AuthOptions setSelectedForm={setSelectedForm}/>;
        }
    }

    return (
        <div className="auth">
            <div className="auth_dark"/>
            <div className="auth_box">
                <div className="auth_box-logo">
                    imagen logo
                </div>
                {handlerForm()}
            </div>
        </div>
    )
}
