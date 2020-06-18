let Mock = require('mockjs');

const apiName=()=>{
  let name = Mock.mock({
    'name|1-100': [{
      'id|+1': 1,
      'name': '@cname',
      'age': '@integer(20,60)',
      'gender|1-2': true,
    }]
  })
  return name
}

module.exports=apiName()