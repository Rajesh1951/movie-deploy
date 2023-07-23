import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SearchList from './components/SearchList';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:id' element={<MovieDetails />}></Route>
          <Route path='/search' element={<SearchList />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
