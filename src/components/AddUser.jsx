import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const AddUser = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-xl ${
          themeMode ? 'bg-gray-300' : 'bg-gray-700'
        }`}>
        <h1 className='text-2xl font-bold mb-4'>Agregar Usuario</h1>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='nombre'
              className='block font-bold mb-2'>
              Nombre
            </label>
            <input
              type='text'
              id='nombre'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='apellido'
              className='block font-bold mb-2'>
              Apellido
            </label>
            <input
              type='text'
              id='apellido'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block font-bold mb-2'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <button
            type='submit'
            className={`w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${
              themeMode
                ? 'bg-blue-500 hover:bg-blue-700'
                : 'bg-gray-800 hover:bg-gray-950'
            }`}>
            Agregar Usuario
          </button>
        </form>
      </div>
    </>
  );
};
//bg-blue-500 hover:bg-blue-700
export default AddUser;
