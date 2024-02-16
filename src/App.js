import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import DetailsPage from './components/Details/DetailsPage';
import Category from './components/Category/Category';
import { RecoilRoot } from 'recoil';
import Nav from './Nav/Nav';
import Favorites from './Pages/FavouriteMovies/FavouriteMovies';

document.querySelector("body").style.background = "rgb(30 41 59)"


function App() {
  return (

<RecoilRoot>
    <Nav />
    <div className="App   ">
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<DetailsPage />} path='/details/:movieId' />
      <Route element={<Category />} path='/category/:movieName/:movieId' />
      <Route element={<Favorites />} path='/favorites' />
    </Routes>
    </div>

</RecoilRoot>
      
  );
}

export default App;
