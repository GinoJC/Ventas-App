import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './StyleArticle';

const Article = (props) => {

  const { id, brand, name, price, vendor, condition, description, image } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image= {image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2">
          {name}
        </Typography>
        <Typography> {description} </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Favoritos
         </Button>
        <Button size="small" color="primary">
          Agregar a carrito
        </Button>
      </CardActions>
    </Card>
  );

}
export default Article;