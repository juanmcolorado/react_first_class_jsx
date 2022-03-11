import { useState } from 'react'
import HomeLight from './Components/HomeLight'
// import Formulario from './Components/H2'
// import H2 from './Components/H2'
// import { Card, ListGroup } from 'react-bootstrap'





function App() {
  // const [isOn, setIsOn] = useState(false)
  // const toogleLight = ()  => {
  //   console.log(isOn)
  //   setIsOn(!isOn)
  // }

  const [title, setTitle] = useState(' ')


  return <div className='App'>
          {/* <div className="home-light">
            <HomeLight estaPrendido={isOn}/>
            <button onClick={toogleLight}>Conmutador</button>
          </div> */}
          <div className="text">
            <input type="text" />
            <h2>Text: {Title} </h2>
          </div>

        </div>
}

export default App;
