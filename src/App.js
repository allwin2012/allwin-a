import './App.css';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner/> {/* Render the HeroBanner component */}
      <header className="App-header">
        {/* ... */}
      </header>
    </div>
  );
}

export default App;
