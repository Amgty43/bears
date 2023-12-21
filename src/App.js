import './App.css';
import Footer from './componets/footer';
import Navbar from './componets/navbar';
import Catalog from './componets/Pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Catalog></Catalog>
      
    <Footer></Footer>
    </div>
  );
}


export default App;