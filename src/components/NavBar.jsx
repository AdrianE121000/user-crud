import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { DarkIcon, LightIcon, MenuIcon } from './Icons';
import { useState } from 'react';

const NavBar = () => {
  const { themeMode, toggTethemeMode } = useContext(ThemeContext);
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav
        className={`p-4 ${
          themeMode ? 'bg-gray-300 text-black' : 'bg-gray-950 text-white'
        }`}>
        <div className='flex justify-between items-center'>
          <Link
            to='/'
            className='font-bold text-xl'>
            Usuarios
          </Link>
          <div className='hidden md:block'>
            <Link
              to='/users'
              className={`mx-4 border px-2 py-1 rounded-md ${
                themeMode ? 'border-black' : 'border-gray-500'
              }`}>
              Todos los Usuarios
            </Link>
            <Link
              to='/add'
              className={`mx-4 border px-2 py-1 rounded-md ${
                themeMode ? 'border-black' : 'border-gray-500'
              }`}>
              Añadir Usuario
            </Link>
          </div>
          <div className='hidden md:flex'>
            <input
              type='checkbox'
              id='themeSwitch'
              className='hidden'
              checked={themeMode}
              onChange={toggTethemeMode}
            />
            <div className='mr-2'>
              <DarkIcon />
            </div>
            <label
              htmlFor='themeSwitch'
              className='flex items-center cursor-pointer'>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  themeMode ? 'bg-gray-500' : 'bg-white'
                }`}>
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                    themeMode
                      ? 'translate-x-5 bg-white'
                      : 'translate-x-0 bg-gray-950'
                  }`}
                />
              </div>
              <div className='ml-2'>
                <LightIcon />
              </div>
            </label>
          </div>
          <div
            onClick={handleMobile}
            className='block md:hidden'>
            <MenuIcon />
          </div>
        </div>
      </nav>
      {mobile && (
        <div
          className={`flex flex-col gap-5 justify-center items-center animate-slowTop ${
            themeMode ? 'bg-gray-300 text-black' : 'bg-gray-950 text-white'
          }`}>
          <div className='flex flex-col gap-2 text-center'>
            <Link
              to='/users'
              className={`mx-4 border px-2 py-1 rounded-md ${
                themeMode ? 'border-black' : 'border-gray-500'
              }`}>
              Todos los Usuarios
            </Link>
            <Link
              to='/add'
              className={`mx-4 border px-2 py-1 rounded-md ${
                themeMode ? 'border-black' : 'border-gray-500'
              }`}>
              Añadir Usuario
            </Link>
          </div>
          <div className='flex mb-3'>
            <input
              type='checkbox'
              id='themeSwitchMobile'
              className='hidden'
              checked={themeMode}
              onChange={toggTethemeMode}
            />
            <div className='mr-2'>
              <DarkIcon />
            </div>
            <label
              htmlFor='themeSwitchMobile'
              className='flex items-center cursor-pointer'>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  themeMode ? 'bg-gray-500' : 'bg-white'
                }`}>
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                    themeMode
                      ? 'translate-x-5 bg-white'
                      : 'translate-x-0 bg-gray-950'
                  }`}
                />
              </div>
              <div className='ml-2'>
                <LightIcon />
              </div>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
