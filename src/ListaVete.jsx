import { ListGroup, Row, Container } from "react-bootstrap";
import ItemLista from "./ItemLista";

const ListaVete = ({listaCita}) => {
  return (
    <>
    <Container className="my-3">
    <ListGroup>
      <h3 className="text-center display-6">Lista de Citas</h3>
      <Row>
        {
            listaCita.map((cita, posicion)=><ItemLista
            key={posicion} cita={cita}></ItemLista>)        }        
      </Row>
    </ListGroup>
    </Container>
    </>
  );
};

export default ListaVete;
