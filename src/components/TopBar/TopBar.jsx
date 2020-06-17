<<<<<<< HEAD
import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography,
        InputBase, MenuItem, Menu, Button} from '@material-ui/core';
import {Search as SearchIcon, AccountCircle} from '@material-ui/icons';
import {Link, withRouter} from "react-router-dom";

import { useStyles } from './StyleTopBar';

function TopBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Cerrar Sesión</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              Ventas-App
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {user ? (
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            ) : (
                <Link to="/login">
                    <Button variant="contained" color="secondary">Iniciar Sesión</Button>
                </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

=======
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = () =>{
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Ventas - App
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    )    

}
>>>>>>> dd2ea8461fec355180d9976fc0709e8a30617e8b
export default TopBar;