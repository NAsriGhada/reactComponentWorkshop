import './App.css';
import About from './component/About';
import Categories from './component/Categories';
import NavBar from './component/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />
      <About />
    </div>
  );
}

export default App;
