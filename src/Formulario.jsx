import { Form, Button, Col, Row, Container } from "react-bootstrap";
import ListaVete from "./ListaVete";

const Formulario = () => {
  return (
    <>
      <Container className="form py-4">
        <Form>
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
                />
              </Col>
            </Form.Group>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicDate">
                <Form.Label column md={4} className="fw-bold">
                  Fecha
                </Form.Label>
                <Col md={8}>
                  <Form.Control type="date" placeholder="" />
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicHora">
                <Form.Label column md={3} className="fw-bold">
                  Hora
                </Form.Label>
                <Col md={8}>
                  <Form.Control type="time" placeholder="" />
                </Col>
              </Form.Group>
            </Col>
            <Form.Group as={Row} className="mb-3" controlId="formBasicSintoma">
              <Form.Label column md={2} className="fw-bold">
                Sintoma
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Ingrese los sintomas" />
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
      <ListaVete></ListaVete>
    </>
  );
};

export default Formulario;
