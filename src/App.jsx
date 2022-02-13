import "./App.scss";
import "./img/icon-font.css"

import Header from "./components/header/header";
import About from "./components/about/about";
import Features from "./components/features/features";


function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Features/>
    </div>
  );
}

export default App;
