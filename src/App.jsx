import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cabecalho from "./components/layout/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Rodape from "./components/layout/Rodape";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>

        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
