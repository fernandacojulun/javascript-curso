const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){//Para sacar al usuario y lo enviamos al login, debido a que no pasa validación
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    //vacío mi localstorage
    localStorage.removeItem('login_success')
    //Me redirecciona al login
    window.location.href = 'login.html'
})