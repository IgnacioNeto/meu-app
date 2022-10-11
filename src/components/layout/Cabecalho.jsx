import styled from "styled-components";
import Menu from "../Menu";

const periodo = "diurno";

/* Tagged Template para uso com styled components: `` */
const StyledCabecalho = styled.header`
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  /* background-color: yellow; */
  text-align: center;

  h1 {
    color: red;
  }
  p {
    font-weight: bold;
    color: Blue;
    font-size: 2rem;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface React</h1>
      <Menu />
      <p>Teste</p>
    </StyledCabecalho>
  );
};

export default Cabecalho;
