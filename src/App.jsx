import "./App.scss";
import "./img/icon-font.css"


import Header from "./components/header/header";
import About from "./components/about/about";
import Features from "./components/features/features";
import Tours from "./components/tours/tours";
import Stories from "./components/stories/stories";
import Booking from "./components/booking/booking";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Features/>
     <Tours/>
     <Stories/>
     <Booking/>
     <Footer/>
    </div>
  );
}

export default App;
