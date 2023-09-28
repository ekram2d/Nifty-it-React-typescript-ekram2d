// App.tsx

import './App.css';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { toggleDarkMode } from './features/darkmode/darkModeSlice';


function App() {
  const mode = useSelector((state: RootState) => state.darkMode.mode);
  const dispatch = useDispatch();

  const containerStyle = {
    background: mode === 'black' ? 'black' : 'white',
    color: mode === 'black' ? 'white' : 'black',
    minHeight: '100vh',
    transition: 'background 0.3s, color 0.3s',
  };

  return (
    <>
      <div style={containerStyle}>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(toggleDarkMode())}
        >
          Toggle Dark Mode
        </button>
      </div>
    </>
  );
}

export default App;
