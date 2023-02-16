import Header from "./components/Header";
import './styles/Header.css';
import './styles/app.css';
import Items from "./components/Items";
import Slider from "./components/Slider";

import ElectronicsItemlist from "./components/ElectronicsItemlist";

import Beauty from "./components/Beauty";
import Summer from "./components/Summer";
import Sports from "./components/Sports";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Header/>
      </div>
       <div className="item">
       <Items/>
       </div>
       <div className="slider">
       <Slider/>
       </div>
        <div className="electronicsitemss">
          <ElectronicsItemlist/>
        </div>
        <div className="beauty">
         <Beauty/>
        </div>
       <div className="summer">
        <Summer/>
       </div>
       <div className="sport">
    <Sports/>
       </div>
       <div className="footer">
        <Footer/>
       </div>
    </div>
  );
}

export default App;
