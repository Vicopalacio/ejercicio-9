import { useEffect, useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import ListaVete from "./ListaVete";

const Formulario = () => {
  const guardarLocalStorage =
    JSON.parse(localStorage.getItem("listaMascota")) || [];

  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [listaCita, setListaCita] = useState(guardarLocalStorage);

  useEffect(() => {
    localStorage.setItem("listaMascota", JSON.stringify(listaCita));
  }, [listaCita]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let objetoArreglos = { nombreMascota, nombreDuenio, fecha, hora, sintomas };
    setListaCita([...listaCita, objetoArreglos]);
    setNombreMascota("");
    setNombreDuenio("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  const borrarCard = (cita) => {
    let arregloCitas = listaCita.filter((item) => item !== cita);
    setListaCita(arregloCitas);
  };

  let mensaje = "";

  if (listaCita.length === 0) {
    mensaje = "No hay citas programadas";
  } else {
    mensaje = "";
  }

  const validacionMascota = (inputMascota) => {
    if (nombreMascota.length < 2) {
      inputMascota.classList.add("is-invalid");
    } else {
      inputMascota.classList.remove("is-invalid");
      inputMascota.classList.add("is-valid");
    }
  };

  const validacionDuenio = (inputDuenio) => {
    if (nombreDuenio.length < 7) {
      inputDuenio.classList.add("is-invalid");
    } else {
      inputDuenio.classList.remove("is-invalid");
      inputDuenio.classList.add("is-valid");
    }
  };
  //VALIDAR
  const validacionFecha = (inputFecho) => {
    if (fecha.length < 2) {
      inputFecho.classList.add("is-invalid");
    } else {
      inputFecho.classList.remove("is-invalid");
      inputFecho.classList.add("is-valid");
    }
  };
  //VALIDAR
  const validacionHora = (inputHora) => {
    if (hora.length < 2) {
      inputHora.classList.add("is-invalid");
    } else {
      inputHora.classList.remove("is-invalid");
      inputHora.classList.add("is-valid");
    }
  };

  const validacionSintoma = (inputSintoma) => {
    if (sintomas.length < 7) {
      inputSintoma.classList.add("is-invalid");
    } else {
      inputSintoma.classList.remove("is-invalid");
      inputSintoma.classList.add("is-valid");
    }
  };

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
                  onChange={(e) => {
                    setNombreMascota(e.target.value);
                    validacionMascota(e.target);
                  }}
                  value={nombreMascota}
                  required
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
                  onChange={(e) => {
                    setNombreDuenio(e.target.value);
                    validacionDuenio(e.target);
                  }}
                  value={nombreDuenio}
                  required
                />
              </Col>
            </Form.Group>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicDate">
                <Form.Label column md={4} className="fw-bold">
                  Fecha
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="date"
                    placeholder=""
                    onChange={(e) => {
                      setFecha(e.target.value);
                      validacionFecha(e.target);
                    }}
                    value={fecha}
                    required
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3" controlId="formBasicHora">
                <Form.Label column md={3} className="fw-bold">
                  Hora
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="time"
                    placeholder=""
                    onChange={(e) => {
                      setHora(e.target.value);
                      validacionHora(e.target);
                    }}
                    value={hora}
                    required
                  />
                </Col>
              </Form.Group>
            </Col>
            <Form.Group as={Row} className="mb-3" controlId="formBasicSintoma">
              <Form.Label column md={2} className="fw-bold">
                Sintoma
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Ingrese los sintomas"
                  onChange={(e) => {
                    setSintomas(e.target.value);
                    validacionSintoma(e.target);
                  }}
                  value={sintomas}
                  required
                />
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
