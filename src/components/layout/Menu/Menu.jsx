import estilosMenu from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={` ${estilosMenu.destaqueMenu} ${estilosMenu.textoMenu} `}>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Serviços</a>
    </nav>
  );
};

export default Menu;
