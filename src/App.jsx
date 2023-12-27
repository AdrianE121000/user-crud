import { BrowserRouter } from 'react-router-dom';
import { Rutas } from './routes/Rutas';
import NavBar from './components/NavBar';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Footer from './components/Footer';

function App() {
  const { themeMode } = useContext(ThemeContext);

  if (themeMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  return (
    <>
      <div
        className={`${
          themeMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}>
        <BrowserRouter>
          <NavBar />
          <Rutas />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
