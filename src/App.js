import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Box } from '@mui/system';
import Admission from './Pages/Admission';
import Footer from './Pages/Footer';
import Notice from './Pages/Notice';
import Contact from './Pages/Contact';
import GoverningBody from './Pages/GoverningBody';


function App() {
  return (
    <>
      <Header></Header>
      <Box style={{ marginTop: 131 }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/admission' element={<Admission></Admission>}></Route>
          <Route path='/notice' element={<Notice></Notice>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/governingBody' element={<GoverningBody></GoverningBody>}></Route>
        </Routes>
      </Box>
      <Footer></Footer>

    </>
  );
}

export default App;
