import styles, { InputContainer } from "./styles";

const Button = ({ onClick }) => {
  return <InputContainer onClick={onClick}>Buscar</InputContainer>;
};

export default Button;
