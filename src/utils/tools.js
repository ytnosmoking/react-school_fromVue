import service from './axios'

/**
 *@description axios for get
 */
export const getDataById = (url, data) => {
  return service.request({
    url: url + '/' + data,
    method: 'get'
  })
}
export const getData = (url, params) => {
  return service.request({
    url,
    params,
    method: 'get'
  })
}

export const getParams = (url, params) => {
  return service.request({
    url,
    params,
    method: 'get'
  })
}
export const postData = (url, data) => {
  return service.request({
    url,
    data
  })
}
export const uploadData = (url, data, method = 'post') => {
  // 如果是upload   数据应该是  formData 形式
  return service.request({
    url,
    method,
    data: makeFormData(data)
  })
}

export const postDataById = (url, id, data) => {
  return service.request({
    url: url + '/' + id,
    data
  })
}
export const deleteData = (url, id) => {
  return service.request({
    url: url + '/' + id,
    method: 'delete'
  })
}

export const deleteBindThird = (url, data) => {
  return service.request({
    url: url,
    data,
    method: 'delete'
  })
}

export const patchData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'patch'
  })
}
export const putData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'put'
  })
}
export const putDataById = (url, data) => {
  const { id } = data
  delete data.id
  return service.request({
    url: url + '/' + id,
    data,
    method: 'put'
  })
}

export const downLoadFile = (url, data, method = 'post') => {
  return service.request({
    url,
    data,
    method,
    responseType: 'blob'
  })
}
export const getDownLoadFile = (url, params, method = 'get') => {
  return service.request({
    url,
    params,
    method,
    responseType: 'blob'
  })
}

export const pt = (value) => ({ paddingTop: value })
export const mt = (value) => ({ marginTop: value })
export const ml = (value) => ({ marginLeft: value })
export const setWidth = (value) => ({ width: value })
export const setDisplay = (value) => ({ display: value })
export const pt10 = {
  paddingTop: 10
}
export const ml20 = {
  marginLeft: 20
}


export const getItem = key => JSON.parse(localStorage.getItem(key)) || ''
export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const removeItem = key => localStorage.removeItem(key)

/**
 * @description Object => formData
 * @param {*} data
 */
export const makeFormData = data => {
  const fd = new FormData()
  for (const key of Object.keys(data)) {
    fd.append(key, data[key])
  }
  return fd
}