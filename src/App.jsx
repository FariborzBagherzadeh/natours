import "./App.scss";
import "./img/icon-font.css"


import Header from "./components/header/header";
import About from "./components/about/about";
import Features from "./components/features/features";
import Tours from "./components/tours/tours";
import Stories from "./components/stories/stories";

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Features/>
     <Tours/>
     <Stories/>
    </div>
  );
}

export default App;
