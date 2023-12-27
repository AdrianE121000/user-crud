import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <footer className='p-4 text-center flex justify-center'>
      <div
        className={`rounded-3xl w-2/3 fixed bottom-2 border px-3 py-1 ${
          themeMode ? 'border-black bg-gray-300' : 'border-white bg-gray-950'
        }`}>
        <p>
          Hecho con 💖 por{' '}
          <span>
            <a
              className={`hover:underline mr-4 ${
                themeMode ? 'text-blue-800' : 'text-blue-400'
              }`}
              href='https://github.com/adriane121000'
              target='_blank'
              rel='noreferrer'>
              Adrian
            </a>
          </span>
        </p>
        <h1 className='text-xl'>Contacto:</h1>
        <div className='mt-2'>
          <a
            href='https://www.linkedin.com/in/adrian-p%C3%A9rez-441ba3264'
            target='_blank'
            rel='noreferrer'
            className={`hover:underline mr-4 ${
              themeMode ? 'text-blue-800' : 'text-blue-400'
            }`}>
            LinkedIn
          </a>
          <a
            href='https://github.com/adriane121000'
            target='_blank'
            rel='noreferrer'
            className={`hover:underline mr-4 ${
              themeMode ? 'text-blue-800' : 'text-blue-400'
            }`}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
