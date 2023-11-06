import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Edad</th>
          <th scope="col">Telefono</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => {
          return (
            <tr key={index}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => eliminarColaborador(colaborador.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Listado;
