import { useState } from 'react'
import HomeLight from './Components/HomeLight'
// import Formulario from './Components/H2'
import H2 from './Components/H2'
// import { Card, ListGroup } from 'react-bootstrap'





function App() {
  // const [isOn, setIsOn] = useState(false)
  // const toogleLight = ()  => {
  //   console.log(isOn)
  //   setIsOn(!isOn)
  // }

  // aqui estamos inicializando nuestro estado
  // tenemos la variable titleText que es la que vamos a ir cambiando 
  // setTitleText es la funcion que no ayudara a cambiar el estado de titleText
  // el useState( ' ') estamos diciendo que el estado iniciara vacio y cuando cambie se va a renderizar nuevamente
  const [titleText, setTitleText] = useState(' ')
  //aqui estamos declarando la funcion para cambiar el estado
  // estamos diciendo que la funcion titleChange va a recibir como argumento un evento
  const titleChange = (event) => {
    // y que cuando el evento se dispare la funcion de cambio del estado que en este caso es
    // settitleText cambiara de acuerdo al valor que estamos metiendo en el input
    // y nosotros accedemos al valor por medio del event.target.value
    // enotnces cuando cambie algo en el input.
  //  el evento se dispara renderizandolo constantemente cada vez que modifiquemos algo en el input
    setTitleText(event.target.value)
  }

  return <div className='App'>
          {/* <div className="home-light">
            <HomeLight estaPrendido={isOn}/>
            <button onClick={toogleLight}>Conmutador</button>
          </div> */}


          
          <div className="text">
            {/* aqui estamos poniendo el input con el evento, en esta caso el evento es onChange 
            que nos dice que cada que se modifique dispara el evento "titleChange"   */}
            <input type="text" onChange={titleChange}/>
            {/* despues que se este modificando el titleText esto lo convertimos en una prop
            para pasarla al componente H2 y se puede renderizar constantemente */}
            <H2 Title={titleText}/>
          </div>

        </div>
}

// const [titleText, setTitleText] = useState (' ') 
//     const titleChange = (event) => {
//       console.log(event.target.value)
//       setTitleText(event.target.value)
//     }

//   return <div className='App'>
// //     {/*<div className="home-light">
// //   <HomeLight estaPrendido={isOn}/> 
// //   <button onClick={toggleLight}>Conmutador</button>
// //   </div>*/}
//             <input type="text" onChange={titleChange}/>
//             <H2  Title={titleText}/>
//           </div>

export default App;
