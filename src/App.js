import { useState } from 'react';
import './App.scss'
import Balloon from './Components/Balloon';

function App() {

  //asi se crea un estado
  //necesitamos declarar una constante y dentro de los corchetes 
  //le ponemos que nombre le queremos poner al estado, en este caso es balloonsRequirement
  //y utilizamos una funcion para actualizar el estado, en este caso se declara seguido del nombre del estado, que es 'setBalloonsRequirement'
  //tanto el nombre como la funcion, lo estamos deconstruyendo de useState y dentro del parentesis va el valor inicial de mi estado.
  //el valor inicial, puede ser cualquier cosa, array,objeto, funcion
  const [balloonsRequirement, setBalloonsRequirement] = useState([
    {
      shape: 'square',
      color: 'peru',
      size: 'small'
    },
    {
      shape: 'redondo',
      color: 'red',
      size: 'big'
    },
    {
      shape: 'long',
      color: 'slategray',
      size: 'normal'
    },
    {
      shape: 'square',
      color: 'purple',
      size: 'big'
    }
  ]) 

  const [balloonObject, setBalloonObject] = useState({})

  const balloonInputHandler = (event) => {
    //aqui estamos imprimiendo que los valores que necesitamos, que son el nombre de la propiedad y el valor de la misma
    let property = event.target.name
    let value = event.target.value
    //aqui vamos a modificar nuestro estado 
    //vmaos a pasarle como argumento, todo lo que tenga balloonObject (que esta vacio porque es el valor inicial)
    //y le vamos agregar la propiedad con su respectivo valor que estamos modificando
    setBalloonObject({...balloonObject, [property]: value})
  }

  const addBalloon = () => {
    setBalloonsRequirement(...balloonsRequirement, balloonObject)
  }

  return (
    <div className='App'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="d-flex">
          {balloonsRequirement.map((balloon, index) => {
            const {shape, color, size} = balloon
            return( <Balloon 
              key={index} 
              shape={shape} 
              color={color} 
              size={size} />)
              })}
            </div>  
          </div>
          <div className="col-12 col-md-4"><form action="" className="bg-dark text-white border rounded p-3">
            <div className="form-group mb-3">
              <label htmlFor="">Tamaño</label>
              <select name="size" id="" className='form-select' aria-label='Default select example' onChange={balloonInputHandler}>
                <option value="small">Pequeño</option>
                <option value="normal">Normal</option>
                <option value="big">Grande</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="">Color</label>
              <input type="color" name='color' className="form-control" onChange={balloonInputHandler}/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="">Forma</label>
              <select name="shape" id="" className='form-select' aria-label='Default select example' onChange={balloonInputHandler}>
                <option value="square">Cuadrado</option>
                <option value="redonde">Redondo</option>
                <option value="long">Largo</option>
              </select>
            </div>
            <button type="button" className='btn btn-outline-light' onClick={addBalloon}>Agregar Globo</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
