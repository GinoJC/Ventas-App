import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import  { useStyles }  from './StyleContentCenter';
import Banner from '../Banner';

export default function ContentCenter({cards}) {

  const classes = useStyles();
  
  return (
    <main>

      <Banner />

      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={6}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading {card}
                  </Typography>
                  <Typography>
                    Esta es la descripcioin del item {card}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                        </Button>
                  <Button size="small" color="primary">
                    Edit
                        </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}
