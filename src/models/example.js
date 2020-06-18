import * as exampleApi from '../services/example';

export default {

  namespace: 'example',

  state: {
    name: []
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
      // console.log(dispatch,history);
    },
  },

  effects: {
    * fetch({
      payload
    }, {
      call,
      put
    }) { // eslint-disable-line
      //   yield put({ type: 'save' });
      // },
      const result = yield call(exampleApi.query); //如果使用  {参数}  ，则是一个对象
      //把请求的数据保存起来
      //数据更新会带动页面重新渲染
      // console.log(result.data.name);

      yield put({
        type: 'save', //reducers中的方法名
        payload: {
          name: result.data.name //网络返回的要保留的数据
        }
      })
    }
  },

  reducers: {
    save(state, {
      payload: name
    }) {
      // console.log(state, name);
      return {
        ...state,
        ...name
      };
    },
  },

};
