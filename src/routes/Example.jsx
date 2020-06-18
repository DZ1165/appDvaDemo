import React from 'react'
import { connect } from 'dva';
import EditableTable from './EditableTable'

const Example =({dispatch})=>{
  function getName(name){
    dispatch({
      type:'example/fetch',
      payload:name,
    })
    console.log('获取名字列表');
    
  }
  return (
    <div>
     <EditableTable onGetName={getName} />
    </div>
  )

}

export default connect(({example})=>({example}))(Example)