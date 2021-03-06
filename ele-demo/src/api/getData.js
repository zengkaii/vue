import axios from 'axios'
const http = axios.create({
    baseURL:'https://elm.cangdu.org',
    timeout:10000
})
// ajax xhr
// fetch 1.兼容性 2. api比较原始

export const cityGuess = () => new Promise((resolve,reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
export const hotcity = () => new Promise((resolve,reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=hot')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})

export const getcaptchas = () => new Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/captchas', {
        method: 'POST',
        body: {},
        headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
export const currentcity = (cityid) => new Promise((resolve,reject) => {
    const url = `/v1/cities/${cityid}`;
    http.get(url)
    .then(res => {
        resolve(res)
    })
})
// address 文本？ 不能进行距离计算，

export const searchplace = (cityid,keyword) => new Promise((resolve,reject) => {
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`
    http.get(url).then(res => resolve(res.data))
})
export const msiteFoodTypes = (geohash) => new Promise((resolve,reject) => {
    const url = `/v2/index_entry`
    http.get(url,{
        geohash,
        group_type:'1',
        'flags[]':'F'
    }).then(res => resolve(res.data))
})