import React, { Component } from "react";
import { Button } from "antd";
import TableItem from "../views/table/TableItem";
import { Link } from "react-router-dom";

import request from '../utils/request'

export default class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2:[]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRequest=this.handleClickRequest.bind(this)
  }

  handleClick = async () => {
    await fetch("http://localhost:8000/api/data")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(e => console.log("数据获取错误或未打开jsonserver", e));
  };

  handleClickRequest =async ()=>{
    let {data}=await request("http://localhost:8000/api/data")
    this.setState({
      data2:data
    })
    
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>获取数据</Button>{" "}
        <Button onClick={this.handleClickRequest}>获取数据2</Button>{" "}
        <Link to="/"> 返回首页 </Link>
        <TableItem data={this.state.data.length!==0?this.state.data: this.state.data2}  />
      </div>
    );
  }
}
