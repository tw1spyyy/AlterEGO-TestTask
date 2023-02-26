export const getStateFromLS = () =>{
    const res = localStorage.getItem('isAuth')
    const isAuth = res ? JSON.parse(res) : ''
    return {isAuth}
}