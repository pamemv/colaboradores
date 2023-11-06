import { useState } from "react";
import BaseColaboradores from "./BaseColaboradores";
import { Container, Row, Col, Stack } from "react-bootstrap";
import AlertForm from "./components/Alert";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [textoBuscado, setTextoBuscado] = useState("");

  const [alert, setAlert] = useState({
    color: "",
    msg: "",
  });

  const buscarColaborador = () => {
    return colaboradores.filter((colaborador) => {
      const values = Object.values(colaborador).map((value) =>
        value.toString().toLowerCase()
      );

      return values.some((value) => value.includes(textoBuscado.toLowerCase()));
    });
  };

  const agregarColaborador = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      { ...colaborador, id: colaboradores.length },
    ]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return !(colaborador.id === id);
    });

    setColaboradores(nuevosColaboradores);
  };

  return (
    <Container fluid="md" className="mt-custom">
      <Stack gap={3}>
        <h1>Listado colaboradores</h1>
        <Row>
          <Col md={6}>
            <Buscador setTextoBuscado={setTextoBuscado} />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={8}>
            <Listado
              colaboradores={textoBuscado ? buscarColaborador() : colaboradores}
              eliminarColaborador={eliminarColaborador}
            />
          </Col>
          <Col md={12} lg={4}>
            <Stack gap={3}>
              <Formulario
                agregarColaborador={agregarColaborador}
                setAlert={setAlert}
              />
              {alert.msg && <AlertForm color={alert.color} msg={alert.msg} />}
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default App;
