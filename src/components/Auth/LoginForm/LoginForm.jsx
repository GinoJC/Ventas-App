import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";
import {Avatar, Button, CssBaseline, TextField,
        Link, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {validateEmail} from "../../../utils/Validations";
import firebase from "../../../utils/firebase";
import "firebase/auth";

import { useStyles } from './StyleLoginForm';

export default function LoginForm() {
    let history = useHistory();
    const [formData, setFormData] = useState(defaultValueForm());
    const [formError, setFormError] = useState({});
    const [userActive, setUserActive] = useState(true);
    const [user, setUser] = useState(null);
    const classes = useStyles();

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        setFormError({});
        let errors = {};
        let formOk = true;

        if(!validateEmail(formData.email)){
            errors.email = true;
            formOk = false;
        }

        if(formData.password.length < 6){
            errors.password = true;
            formOk = false;
        }

        setFormError(errors);

        if(formOk){
            console.log("iniciando sesion");
            
            firebase
                .auth()
                .signInWithEmailAndPassword(formData.email, formData.password)
                .then(response => {
                    setUser(response.user);
                    setUserActive(response.user.emailVerified);
                    if(!response.user.emailVerified){
                        console.log("Para poder loguearse antes tiene que verificar la cuenta.");
                        toast.warning("Para poder loguearse antes tiene que verificar la cuenta.");
                    }    
                }).catch(err => { 
                    handlerErrors(err.code);
                }).finally(() => {
                    console.log("llega aca");
                    
                    history.push("/");
                });
        }
    }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                error={formError.email}
              />
              {formError.email && (
                    <span className="error-text">
                        Por favor, introduce un correo electrónico válido.
                    </span>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={formError.password}
              />
              {formError.password && (
                    <span className="error-text">
                        Por favor, elige una contraseña superior a 5 caracteres.
                    </span>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Iniciar Sesión
              </Button>
            </form>
            {!userActive && (
                <ButtonResetSendEmailVerification
                    user={user}
                    setUserActive={setUserActive}
                />
            )}
            <Grid container>
                <Grid item>
                    <Link href="/register" variant="body2">
                    {"Todavia no tienes cuenta? Regístrate!"}
                    </Link>
                </Grid>
            </Grid>
          </div>
        </Container>
      );
}

function ButtonResetSendEmailVerification(props){
    const { user, setUserActive } = props;

    const resendVerificationEmail = () => {
        user
        .sendEmailVerification()
        .then(() => {
            toast.success("Se ha enviado el email de verificación.")
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setUserActive(true);
        });
    };

    return(
        <div className="resend-verification-email">
            <p>
                Si no has recivido el email de verificación puedes volver a enviarlo
                haciendo click <span onClick={resendVerificationEmail}>aquí.</span>
            </p>
        </div>
    );
}

function handlerErrors(code) {
    switch (code) {
        case "auth/wrong-password":
            toast.warning("El usuario o la contaseña son incorrectos");
            break;
        case "auth/too-manu-request":
            toast.warning("Has enviado demasiadas solicitudes de reenvio de confirmacion en muy poco tiempo.");
            break;
        case "auth/user-not-found":
            toast.warning("El usuario o la contaseña son incorrectos");
            break;
        default:
            break;
    }
}

function defaultValueForm(){
    return {
        email: "",
        password: ""
    };
}