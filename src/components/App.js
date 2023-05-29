import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Home from '../pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flights' element={''} />
          <Route path='/ticket' element={''} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
