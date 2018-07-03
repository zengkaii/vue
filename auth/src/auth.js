// loggedIn 方法
// localStorage token !

export default {
    loggedIn (){
        // localStorage.getItem('token')
        return localStorage.token
    },
    login (email, pass, cb) {
        setTimeout(() => {
            if(email === '1965599425@qq.com' && pass === '12345678') {
                const token = Math.random().toString(36).substring(7);
                localStorage.setItem('token',token);
                cb(true)
            } else {
                cb(false)
            }
        },500)
    }
}