import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Link} from 'react-router-dom'
import Home from './Home'

function IndexPage() {


  return (
    <div className={styles.normal}>
      IndexPage
      <Home />
      <Link to='/products'>products</Link>
      <br/>
      <Link to='/table'> table </Link>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
