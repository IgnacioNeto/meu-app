import Artigo from "../Artigo";

const Conteudo = () => {
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

        <Artigo />

        <article>
          <h3>Título....</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            ab, impedit quae repudiandae aspernatur distinctio nobis quibusdam
            inventore sequi aliquam cumque esse ad excepturi. Corporis odio
            dolores recusandae inventore. Eius!
          </p>
        </article>
        <article>
          <h3>Título....</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            ab, impedit quae repudiandae aspernatur distinctio nobis quibusdam
            inventore sequi aliquam cumque esse ad excepturi. Corporis odio
            dolores recusandae inventore. Eius!
          </p>
        </article>
      </section>
    </main>
  );
};

export default Conteudo;
