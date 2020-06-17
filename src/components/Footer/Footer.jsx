import React from 'react';
import Typography from '@material-ui/core/Typography';
import  { useStyles }  from './StyleFooter';

const Footer = () =>{
  
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Aca va el Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Una descripcion para el footer!
        </Typography>
      </footer>
    </>
  );    

}
export default Footer;