import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import  { useStyles }  from './StyleBanner';

const TopBar = () =>{
    
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Aca va el banner
            </Typography>
          </Container>
        </div>
    )    

}
export default TopBar;