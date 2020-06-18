import dva from 'dva';
import './index.css';


// 1. Initialize
// const app = dva({
//   initialState:{
//     products:[
//       {name:'abc',id:1},
//       {name:'qwe',id:2},
//     ]
//   }
// });

 const app = dva({
  initialState : {
    products: [{
        name: 'dva',
        id: 1
      },
      {
        name: 'antd',
        id: 2
      },
    ],
    mockjs: [
      {dad:'dad'}
    ]
  }
  
 });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default)
app.model(require('./models/products').default);
app.model(require('./models/mockjs').default);


// 4. Router
app.router(require('./router.jsx').default);

// 5. Start
app.start('#root');
