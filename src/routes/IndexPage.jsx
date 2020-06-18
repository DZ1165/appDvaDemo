import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import {Link} from 'react-router-dom'
import Home from './Home'
import Example from './Example'

function IndexPage() {


  return (
    // <div className={styles.normal}>
    <div>
      IndexPage
      <Home />
      <Link to='/products'>products</Link>
      <br/>
      <Link to='/table'> table </Link>

      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
