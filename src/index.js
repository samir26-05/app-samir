//--------MANERA EN QUE SE HACIA ANTERIORMENTE--------
//const  element = document.createElement('h1')
//element.innerText = 'hola mundo'
//const container = document.getElementById('root')
//container.appendChild(element)

//---------CON REACT-----------

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Excercises from './pages/Excercises'

/*
const user = {
  firstname: 'Samir',
  lastname: 'Orozco',
  avatar: '.../images/avatar.jpg'
}

function getName(user) {
  return `${user.firstname} ${user.lastname}`
}

const element =
  <div>
    <h1>Hola React.. yo soy: {getName(user)}</h1>
    <img src={avatardev} />
  </div>
*/
const container = document.getElementById('root')

//la funcion del metodo "render" es renderizar "que" y en "donde"
ReactDOM.render(<Excercises/>, container)



