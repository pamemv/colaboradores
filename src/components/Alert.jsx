import { Alert } from "react-bootstrap";

const AlertForm = ({ color, msg }) => {
  return (
    <Alert key={color} variant={color}>
      {msg}
    </Alert>
  );
};

export default AlertForm;
