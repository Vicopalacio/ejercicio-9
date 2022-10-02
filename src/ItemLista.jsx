import { Card, Button, Col, CardImg, Row } from "react-bootstrap";

const ItemLista = () => {
  return (
    <>
      <Col xs={4}>
        <Card className='mt-2'>
            <Card.Body>
            <Row>
                <Col sm={4}>
                <CardImg className='w-100 rounded-circle' src='https://estaticos.serpadres.es/media/cache/1140x_thumb/uploads/images/gallery/5a659c6f5bafe8074be92846/3.jpg'>
                </CardImg>
                </Col>
                <Col sm={8}>
                    <Card.Title>
              <Card.Text>Nombre mascota: </Card.Text>
                    </Card.Title>
              <Card.Text>Nombre dueño: </Card.Text>
                </Col>
            </Row>
            </Card.Body>
          <Card.Body className='form'>
            <div>
            <Card.Text className='fw-bolder'>Cita:</Card.Text>
              <Card.Text>Fecha:</Card.Text>
              <Card.Text>Hora:</Card.Text>
              <Card.Text>Sintomas:</Card.Text>
            </div>
          </Card.Body>
            <div className="d-flex justify-content-end">
            <Button variant="danger my-3">Eliminar</Button>
            </div>
        </Card>
      </Col>{" "}
    </>
  );
};

export default ItemLista;
