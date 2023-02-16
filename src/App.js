import Header from "./components/Header";
import './styles/Header.css';
import './styles/app.css';
import Items from "./components/Items";
import Slider from "./components/Slider";

import ElectronicsItemlist from "./components/ElectronicsItemlist";

import Beauty from "./components/Beauty";
import Summer from "./components/Summer";
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
    </div>
  );
}

export default App;
