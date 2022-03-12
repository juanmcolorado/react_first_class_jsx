import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { useState } from 'react'

function App() {
  const [koderList, setKoderList] = useState([
    {
      name: 'Vicente Gutierrez',
      generation: '15g'
    },
    {
      name: 'Erik Gutierrez',
      generation: '15g'
    },
    {
      name: 'Viridiana Austria',
      generation: '15g'
    },
    {
      name: 'Luis Juarez',
      generation: '15g'
    },
    {
      name: 'Francisco Paz',
      generation: '15g'
    },
  ])

  const [koderData, setKoderData] = useState({})
  const getInputData = event => {
    let property = event.target.name
    let value = event.target.value
    console.log("property: ", property)
    console.log("value: ", value)
    setKoderData({...koderData, [property]: value })
  }

  const saveKoder = () => {
    setKoderList([...koderList, koderData])
  }

  const deletKoder = (event) => {
    let koderIndex = event.target.dataset.koderIndex
    let allKoders = koderList
    allKoders.splice(koderIndex, 1)
    setKoderList([...allKoders])
    console.log(allKoders)

    // console.log(koderIndex)
  }

  return (
    <div className='App'>
      <Container>
        <Row>
          <Col xs="12" md="6">
            {
              koderList.map( (koder, index) => {
                const {name, generation} = koder
                return (
                  <Card
                  key={index}
                    body
                    inverse
                    style={{
                      backgroundColor: '#333',
                      borderColor: '#333'
                    }}
                    className="mt-3"
                  >
                    <CardTitle tag="h5">
                      {name}
                    </CardTitle>
                    <CardText>
                      {generation}
                    </CardText>
                    <Button data-koder-index={index} onClick={deletKoder}>
                      Delete Koder
                    </Button>
                  </Card>
                )
              })
            }
          </Col>
          <Col xs="12" md="6">
            <form action="" className="p-3 bg-dark text-white border rounded">
              <div className="form-group mb-3">
                <label htmlFor="'name">Nombre del Koder</label>
                <input className="form-control" type="text" name="name" onChange={getInputData}></input>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="generation">Generación</label>
                <input className="form-control" type="text" name="generation" onChange={getInputData}></input>
              </div>
              <div className="btn btn-success" onClick={saveKoder}>Guardar Koder</div>
            </form>  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
