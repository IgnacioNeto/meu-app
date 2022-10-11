import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2 className={estilos.subtitulo}>Conteúdo do site...</h2>
        <p>
          {/* <span className={` ${estilos.destaque} ${estilos["sombra-texto"]} `}> */}
          <span className={` ${estilos.destaque} ${estilos.sombraTexto} `}>
            Lorem
          </span>
          ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam
          qui quisquam nesciunt, incidunt quia repellendus dicta omnis veniam
          expedita labore cum necessitatibus maxime? Quam a dignissimos itaque
          illum et!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;
