import { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";

const Formulario = ({ agregarColaborador, setAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    edad: "",
    correo: "",
    cargo: "",
    telefono: "",
  });

  const onChangeElement = (key, { target }) => {
    setColaborador({ ...colaborador, [key]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const sinCamposVacios = Object.values(colaborador).some(
      (value) => value.length === 0
    );

    if (!sinCamposVacios) {
      agregarColaborador(colaborador);

      setAlert({
        msg: "Colaborador agregado!",
        color: "success",
      });
    } else {
      setAlert({
        msg: "Completa todos los campos!",
        color: "danger",
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap={3}>
        <h2>Agregar colaborador</h2>
        <Form.Control
          type="text"
          placeholder="Nombre colaborador"
          onChange={(value) => onChangeElement("nombre", value)}
        />
        <Form.Control
          type="email"
          placeholder="Correo del colaborador"
          onChange={(value) => onChangeElement("correo", value)}
        />
        <Form.Control
          type="text"
          placeholder="Edad del colaborador"
          onChange={(value) => onChangeElement("edad", value)}
        />
        <Form.Control
          type="text"
          placeholder="Cargo del colaborador"
          onChange={(value) => onChangeElement("cargo", value)}
        />
        <Form.Control
          type="text"
          placeholder="Télefono del colaborador"
          onChange={(value) => onChangeElement("telefono", value)}
        />
        <Button variant="primary" type="submit">
          Agregar colaborador
        </Button>
      </Stack>
    </Form>
  );
};

export default Formulario;
