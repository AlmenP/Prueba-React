import './index.css';
import MiApi from "./Components/MiApi";
import Header from "./Components/Header";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Magos y brujas de Hogwarts" />
      <MiApi />
     <Footer />
    </div>
  );
}

export default App;