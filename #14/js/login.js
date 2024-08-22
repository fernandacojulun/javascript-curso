//Tomo mi formulario
const loginForm = document.querySelector('#loginForm')
//mi evento
var intentos = 3;
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault() //Para que no se recargue mi pagina
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    //me traigo la bd creada con localstorage
    const Users = JSON.parse(localStorage.getItem('users')) || []//mini base de datos, en caso de que hayas usuarios guarda sino está vacío
    const validUser = Users.find(user => user.email === email && user.password === password)//Para buscar mis registros de la bd  
   
        if(validUser){
          alert(`Bienvenido ${validUser.name}`)
          localStorage.setItem('login_success', JSON.stringify(validUser)) //Esto es para saber si hay un usuario logeado
          window.location.href = 'crear.html'   
        }
        else{
          intentos--;

          if(intentos>0){
            alert("Inicio de sesión incorrecto, te queda " + intentos + " intentos");
          }
          else{
            alert("Has agotado tus intentos... ");
            alert("El acceso ha sido bloqueado");
            window.location.href = 'index.html' 
          }
        }
    
    

})