import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Subtitulo artigo 1",
      texto: "Texto artigo 1",
      curso: "JS Avançado",
    },
    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Subtitulo artigo 2",
      texto: "Texto artigo 2",
      curso: "React",
    },
    {
      id: 3,
      titulo: "Artigo 3",
      subtitulo: "Subtitulo artigo 3",
      texto: "Texto artigo 3",
      curso: "Node.JS",
    },
  ];

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

        {artigos.map(({id, titulo, subtitulo, curso, texto}) => (
          <Artigo
            key={id}
            titulo={titulo}
            subtitulo={subtitulo}
            curso={curso}
          >
            {texto}
          </Artigo>
        ))}
      </section>
    </main>
  );
};

export default Conteudo;
