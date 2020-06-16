import React from 'react'
import {Table} from 'antd'
const columns = [
  {
    title: '新闻标题',
    dataIndex: 'title',
    key: '1',
    render: text => <p>{text}</p>,
  },
  {
    title: '图片',
    dataIndex: 'images',
    key: '2',
    render: text => <img src={text} alt={'images'}/>,
  },
  {
    title: 'tag',
    dataIndex: 'tag',
    key: '3',
    render: text => <p>{text}</p>,
  },
  {
    title: '内容',
    dataIndex: 'desc',
    key: '4',
    render: text => <p>{text}</p>,
  },  {
    title: '观看数',
    dataIndex: 'views',
    key: '5',
    render: text => <p>{text}</p>,
  },
];
const TableItem = (props)=>{
 console.log( props);
  return (

    <Table columns={columns} dataSource={props.data} rowKey={row=>row.id}>

    </Table>
  )

}

export default TableItem