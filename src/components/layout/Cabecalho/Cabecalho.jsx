import Menu from "../Menu/Menu";

const estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  return (
    /* CSS in JS */
    /* CSS inline (usa propriedade style e sintaxe de objeto) */
    <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1 style={estilos}>Interface React</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;
