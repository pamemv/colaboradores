const Buscador = ({ setTextoBuscado }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Buscar colaborador"
      onChange={({ target }) => setTextoBuscado(target.value)}
    />
  );
};

export default Buscador;
