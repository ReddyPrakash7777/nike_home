
import './App.css';
import Home from './components/Home.jsx';
import Services from "./components/Services.jsx"
import Collection from './components/Collection.jsx';
import Latestproducts from './components/Latestproducts.jsx';
import Exclusiveproducts from './components/Exclusiveproducts.jsx';
import Brand from './components/Brand.jsx';
import Dealweak from './components/Dealweak.jsx';
function App() {
  return (
    <div >
      <Home />
      <Services />
      <Collection />
      <Latestproducts />
      <Exclusiveproducts />
      <Brand />
      <Dealweak />
    </div>
  );
}

export default App;
