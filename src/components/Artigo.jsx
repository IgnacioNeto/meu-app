const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h3>{props.curso}</h3>
      <h4>{props.subtitulo}</h4>
      <p>{props.children}</p>
    </article>
  );
};

export default Artigo;
