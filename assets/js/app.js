/**
 * El programa hace una solicitud fetch para obtener y mostrar 
 * usuarios y desplegarlos en pantalla.
 */


//Quitar el signo $ al inicio de cada variable, no esta permitido
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//SE cambio .name, .blog (class)
//Se cambio tipo const por let
let n = document.querySelector('.name');
let b = document.querySelector('.blog');
let l = document.querySelector('.location');

//url ='https://api.github.com/users/stolinski'
//Se quito await al principio de la funcion
//Se agrego .catch en caso de error
//Se agrego .innerHTML para mostrar resultado en pantalla

function displayUser(username){
  n.textContent = 'cargando...'
  fetch(`${usersEndpoint}/${username}`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    n.innerHTML = response.name;
    b.innerHTML = response.blog;
    l.innerHTML = response.location;
  })
  .catch(error => {
    console.log("OH NO!");
    console.log(error);
    n.innerHTML = `Algo salió mal: ${err}`
  });
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
//SE quito .catch y se agrego en la solicitud fetch
displayUser('stolinski');