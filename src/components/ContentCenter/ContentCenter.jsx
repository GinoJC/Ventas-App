import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useStyles } from './StyleContentCenter';
import Banner from '../Banner';
import Article from '../Article';

const ContentCenter = ({ articles }) => {

  const classes = useStyles();

  return (
    <main>
      <Banner />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={6}>
            {articles.map((article) => (
              <Grid item xs={12} sm={6} md={3}>
                <Article {...article} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  )
}


const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps, null)(ContentCenter);
