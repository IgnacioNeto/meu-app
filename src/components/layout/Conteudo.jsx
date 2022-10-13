import { useState } from "react";
import Artigo from "../Artigo";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFEE71");
  const fundoAzul = () => setCorFundo("lightblue");
  const fundoVermelho = () => setCorFundo("lightpink");

  const atualizaContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <button onMouseOver={fundoVermelho}>Vermelho</button>

      <section>
        <h2 onClick={atualizaContagem}>Contador:{contador}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          laboriosam qui quisquam nesciunt, incidunt quia repellendus dicta
          omnis veniam expedita labore cum necessitatibus maxime? Quam a
          dignissimos itaque illum et!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;
