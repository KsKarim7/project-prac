import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Box } from '@mui/system';
import Admission from './Pages/Admission';
import Footer from './Pages/Footer';


function App() {
  return (
    <>
      <Header></Header>
      <Box style={{ marginTop: 131 }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/admission' element={<Admission></Admission>}></Route>
        </Routes>
      </Box>
      <Footer></Footer>

    </>
  );
}

export default App;
