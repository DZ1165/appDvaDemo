import { connect } from 'dva'

import React, { Component } from 'react'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.mockjs[0].dad,
    }
  }





  render() {
    return (
      <div>
        {this.state.name} form model
      </div>
    )
  }
}
export default connect(({ mockjs }) => ({
  mockjs,
}))(Home)