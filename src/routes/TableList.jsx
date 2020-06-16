import React, { Component } from "react";
import { Button } from "antd";
import TableItem from "../views/table/TableItem";
import { Link } from "react-router-dom";

export default class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async () => {
    await fetch("http://localhost:8000/api/data")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          data
        });
      })
      .catch(e => console.log("数据获取错误", e));
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>获取数据</Button>{" "}
        <Link to="/"> 返回首页 </Link>
        <TableItem data={this.state.data} />
      </div>
    );
  }
}
