
import './App.css';
import { Article } from './Components/Article';
import { DrugData } from './Components/DrugInfo';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';


function App() {
  
  return (
    <div className="App">
    <Header/>
    <DrugData/>
   
    <Article/>
    <Footer/>
      
    </div>
  );
}

export default App;
