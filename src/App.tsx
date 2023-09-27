
import './App.css'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Home from './components/Home/Home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {

  const mode = useSelector((state: RootState) => state.darkMode.mode); 
  const dispatch = useDispatch();
  const containerStyle = {
    background: mode ? 'black' : 'white',
    color: mode ? 'white' : 'black', 
    minHeight: '100vh',
    transition: 'background 0.3s, color 0.3s', 
  };
  return (
    <>
  <div  style={containerStyle}>
  <Header></Header>
   <Home></Home>
   <Footer></Footer>
  </div>
   
    </>
  )
}

export default App
