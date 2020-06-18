import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Banner from '../../components/Banner';

const Article = (props) => {
  const { id } = props.match.params;

  console.log('props: ',props);
  console.log('props.match: ',props.match);
  console.log('props.match.params: ', props.match.params);
  return (
    <main>
      <Banner />
      <h1> {id} </h1>
      <Button onClick={() => props.history.goBack()} color="primary">
        Volver
      </Button>
    </main>
  )
}


const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps, null)(Article);
