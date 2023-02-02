import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./MiApi.css";

const MiApi = () => {
  const [dataHP, setDataHP] = useState([])
  const [inputValue, setInputvalue] = useState("")
  const [orden, setOrden] = useState(true)

  const inputChanges = (e) => {
    setInputvalue(e.target.value)
  }

  const clickOrdenar = () => {
    setOrden(!orden)
  }

  const filtrarData = dataHP.filter(item => item.personaje.toLowerCase().includes(inputValue.toLowerCase())).sort((a, b) => {
    if (a.personaje < b.personaje) return orden ? -1 : 1
    if (a.personaje > b.personaje) return orden ? 1 : -1
    return 0
  })

  const getApi = async () => {
    const url = ""
    try {
      let response = await fetch(url)
      let newData = await response.json()
      setDataHP(newData)
    } catch {
      alert("No se ha podido conectar con la API") 
    }
  }

  useEffect(()=>{
    getApi()
  },[])

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="w-100 mt-3 d-flex">
              <input className="buscar w-100 ms-auto" type="text" value={inputValue} onChange={inputChanges} placeholder="Busca a tu personaje favorito" />
              <Button className="me-1 m-2" variant="warning" onClick={clickOrdenar}><em>Accio</em></Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-3">
        <Row xs={1} md={4} className="g-4">
          {filtrarData.map(item =>(
            <Col>
            <Card className="card" class="m-5 p-2 bg-light border" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item.imagen} className="imagen"/>
            <Card.Body>
              <Card.Title>{item.personaje}</Card.Title>
              <Card.Text> {item.biografía}</Card.Text>
              <Button variant="warning">Ver más...</Button>
            </Card.Body>
          </Card>
          </Col>
          ))}
        </Row>
      </Container>


    </div>
  );
}
export default MiApi;