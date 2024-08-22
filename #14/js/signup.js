const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    //objengo mis variables
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || [] //mini base de datos, en caso de que hayas usuarios guarda sino está vacío
    const isUserRegistered = Users.find(user => user.email === email) //buscar un usuario que tenga el mismo mail|
    if(isUserRegistered){ //validación para saber si está registrado
        return alert('El usuario ya esta registado!')
    }else{
      //Acceos incorrectos
      intentos--;
      if(intentos > 0){
        alert('Registro Exitoso!' + intentos + "Intentos")
      }
    }
    //En caso no esté registrado, lo agregamos a la bd
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    //redirección al login
    window.location.href = 'login.html'

})