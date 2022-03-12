import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { useState } from 'react'

function App() {


  

  return (
    <div className='App'>
      <Container class="fluid">
        
          <Col  className='col-xs-6'>
          <Card
            body
            className="text-center"
          >
            <CardTitle tag="h5">
              To do List
            </CardTitle>
            <div>
            <CardText>
              Lista de tareas
            </CardText>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
            </div>
          </Card>
          </Col>
        
          <Col classNanme="col-xs-6 ">
          <form action="" className="p-3 bg-dark text-white border rounded mb-3">
            <div className="form-group">
              <label htmlFor="tarea"></label>
              <input type="text" className='form-control' onChange={ToDo}/>
            </div>
            <div className="form-group">
              <label htmlFor="fecha"></label>
              <input type="date" className='form-control' onChange={ToDoDate}/>
            </div>
            <Button>Guardar Tarea</Button>
            <div className="btn btn-success mt-3">Guardar Tarea</div>
          </form>
          </Col>
        
      </Container>
    </div>
  );
}

export default App;
