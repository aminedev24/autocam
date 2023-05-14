//import './App.css';
import TopBar from './topBar';
import Header from './header';
import Navigation from './nav';
import Hero from './hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <Header />
        <Navigation />
        <Hero />
      </header>
    </div>
  );
}

export default App;
