import {useState} from 'react'
import HomeLight from './Components/HomeLight'
import Formulario from './Components/H2'
import H2 from './Components/H2'


function App() {
  // const [ isOn, setIsOn ] = useState( false )
  // const toggleLight = () => {
  //   console.log(isOn)
  //   setIsOn(!isOn)
  //   event.target.value
  // }

    const [titleText, setTitleText] = useState (' ') 
    const titleChange = (event) => {
      console.log(event.target.value)
      setTitleText(event.target.value)
    }

  return <div className='App'>
            {/*<div className="home-light">
              <HomeLight estaPrendido={isOn}/> 
              <button onClick={toggleLight}>Conmutador</button>
              </div>*/}
            <input type="text" name="" id="Titulo" onChange={titleChange}/>
            <H2  Title={titleText}/>
          </div>
}

export default App;
