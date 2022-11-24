import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={[<Banner/>,<Movies/>]}
></Route>
      <Route path="/favourites" element={<Favourites />}></Route>
      {/* <Banner/> */}
      {/* <Movies/> name="udai" */}
      {/* <Favourite/> */}
      </Routes>
    </Router>
  );
}

export default App;