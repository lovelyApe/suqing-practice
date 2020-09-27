import axios from 'axios';

const reqConfig = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
};

/**
 * 请求
 *
 * @param {string} url 接口文档上的url地址
 * @param {*} reqData 请求数据
 */
function post(url, reqData, config = reqConfig) {
  return axios
    .post(url, reqData, config)
    .then(response => response.data)
    .then(result => result)
    .catch(error => {
      throw new Error(error);
    });
}

function get(
  url,
  config = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
) {
  return axios({
    method: 'get',
    url,
    ...config
  })
    .then(response => response.data)
    .then(result => result)
    .catch(error => {
      throw new Error(error);
    });
}

export function requestForm(
  url,
  reqData,
  config = {
    mimetype: 'multipart/form-data',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept-Encoding': 'gzip'
    }
  }
) {
  const form = new FormData();
  Object.keys(reqData).forEach(item => {
    form.append(item, reqData[item]);
  });
  return axios
    .post(url, form, config)
    .then(response => response.data)
    .then(result => result)
    .catch(error => {
      throw new Error(error);
    });
}


// export { post, get, requestForm };

export default {
  install(Vue: any, option: any) { // eslint-disable-line
    Object.defineProperty(Vue.prototype, option ? `$${option}` : '$request',
      { value: { post, get, requestForm } });
  },
};
