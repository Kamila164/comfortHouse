import Advantage from "./components/Advantage/Advantage";
import Home from "./components/Home/Home";
import './App.css';
import About from "./components/About/About";
import YoutubeLink from "./components/YoutubeLink/YoutubeLink";
import Slider from "./components/SliderG/Slider";
import Location from "./components/Location/Location";
import Apartments from "./components/Apartments/Apartments";
import Construction from "./components/Construction/Construction";
import Purchase from "./components/Purchase/Purchase";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Widget from "./components/Widget/Widget";
import Backcall from "./components/Backcall/Backcall";


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Widget />
        <Home />
        <Advantage />
        <About />
        <YoutubeLink videoId='_xBU16uHkCw'/>
        <Slider />
        <Location />
        <Apartments />
        <Construction />
        <Purchase />
        <Clients />
        <Backcall />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
