import Artigo from "../Artigo";

const Conteudo = () => {
  /* 1) Crie um array com o nome de 3 cursos */

  /*  2) Dentro das chamadas do artigo, passe como uma nova prop chamada curso
  o nome de cada curso. O primeiro artigo deve mostrar o nome do primeiro curso,
  o segundo artigo o nome do segundo curso e o terceiro o nome do terceiro curso */

  const cursos = ["HTML", "CSS", "JS"];

  return (
    <main>
      <section>
        <h2>Conteúdo do site...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          laboriosam qui quisquam nesciunt, incidunt quia repellendus dicta
          omnis veniam expedita labore cum necessitatibus maxime? Quam a
          dignissimos itaque illum et!
        </p>

        {/* Children é o que está entre as Tags de abertura/fechamento */}
        {/* <Artigo>Este é o texto do primeiro artigo...</Artigo> */}
        <Artigo titulo="Artigo 1" subtitulo="Subtitulo 1" curso={cursos[0]}>
          Este é o texto do primeiro artigo...
        </Artigo>

        <Artigo titulo="Artigo 2" subtitulo="Subtitulo 2" curso={cursos[1]}>
          Este é o texto do segundo artigo...
        </Artigo>

        <Artigo titulo="Artigo 3" subtitulo="Subtitulo 3" curso={cursos[2]}>
          Este é o texto do terceiro artigo...
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;
