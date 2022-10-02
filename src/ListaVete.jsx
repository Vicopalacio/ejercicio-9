import { ListGroup, Row, Container } from "react-bootstrap";
import ItemLista from "./ItemLista";

const ListaVete = () => {
  return (
    <>
    <Container className="my-3">
    <ListGroup>
      <h3 className="text-center display-6">Lista de Citas</h3>
      <Row>        
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>

      </Row>
    </ListGroup>
    </Container>
    </>
  );
};

export default ListaVete;
