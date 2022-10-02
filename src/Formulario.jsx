import { useEffect, useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import ListaVete from "./ListaVete";

const Formulario = () => {

    const guardarLocalStorage = JSON.parse(localStorage.getItem("listaMascota")) || [];

    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDuenio, setNombreDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [listaCita, setListaCita] = useState(guardarLocalStorage);

    useEffect(() => {
      localStorage.setItem("listaMascota", JSON.stringify(listaCita));
    }, [listaCita]);
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        let objetoArreglos = {nombreMascota, nombreDuenio, fecha, hora, sintomas};
        setListaCita([...listaCita, objetoArreglos]);
        setNombreMascota("");
        setNombreDuenio("");
        setFecha("");
        setHora("");
        setSintomas("");
    }

    const borrarCard = (cita)=>{
        let arregloCitas = listaCita.filter((item)=> item !== cita);
        setListaCita(arregloCitas);
    }

    let mensaje = "";
    
    if(listaCita.length === 0){
        mensaje="No hay citas programadas"
    }else{
        mensaje="";
    }


  return (
    <>
      <Container className="form py-4">
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center display-6">Llenar formulario</h3>
          <Row>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formBasicNombreMascota"
            >
              <Form.Label column md={2} className="fw-bold">
                Nombre de mascota
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre de su mascota"
                  onChange={(e)=> setNombreMascota(e.target.value)}
                  value={nombreMascota}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formBasicNombreDueño"
            >
              <Form.Label column md={2} className="fw-bold">
                Nombre del dueño
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre del dueño"
                  onChange={(e)=> setNombreDuenio(e.target.value)}
                  value={nombreDuenio}
                />
              </Col>
            </Form.Group>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicDate">
                <Form.Label column md={4} className="fw-bold">
                  Fecha
                </Form.Label>
                <Col md={8}>
                  <Form.Control type="date" placeholder=""
                  onChange={(e)=> setFecha(e.target.value)} 
                  value={fecha}/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicHora">
                <Form.Label column md={3} className="fw-bold">
                  Hora
                </Form.Label>
                <Col md={8}>
                  <Form.Control type="time" placeholder="" 
                  onChange={(e)=> setHora(e.target.value)}
                  value={hora}/>
                </Col>
              </Form.Group>
            </Col>
            <Form.Group as={Row} className="mb-3" controlId="formBasicSintoma">
              <Form.Label column md={2} className="fw-bold">
                Sintoma
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Ingrese los sintomas" 
                onChange={(e)=> setSintomas(e.target.value)}
                value={sintomas}/>
              </Col>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit" className="px-5">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
      <ListaVete listaCita={listaCita} borrarCard={borrarCard}></ListaVete>
      <p className="display-6 text-center">{mensaje}</p>
    </>
  );
};

export default Formulario;
