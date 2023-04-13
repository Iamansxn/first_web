import "./App.css";
import { Nav } from "./Component/Nav";
import { Menu } from "./Component/Menu";

const App = () => {
  return (
    <div className="App">
      <header className="Food">
        <Nav />
        <Menu />
      </header>
    </div>
  );
};

export default App;
