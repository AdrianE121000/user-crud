import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useUserStore } from '../store/users';
import { useRef } from 'react';
import { useState } from 'react';
const AddUser = () => {
  const { themeMode } = useContext(ThemeContext);
  const addUser = useUserStore((state) => state.addUser);
  const formRef = useRef();
  const [show, setShow] = useState('hidden');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target[0].value,
      last: e.target[1].value,
      userName: e.target[2].value,
      email: e.target[3].value,
    };

    addUser(newUser);

    formRef.current.reset();

    setShow((state) => (state === 'hidden' ? 'block' : 'hidden'));

    setTimeout(() => {
      setShow((state) => (state === 'hidden' ? 'block' : 'hidden'));
    }, 2500);
  };

  return (
    <>
      <div
        className={`max-w-md mx-auto mt-5 py-2 px-5 rounded-lg shadow-xl ${
          themeMode ? 'bg-gray-300' : 'bg-gray-700'
        }`}>
        <h1 className='text-2xl font-bold mb-4'>Agregar Usuario</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block font-bold mb-2'>
              Nombre
            </label>
            <input
              required
              type='text'
              id='name'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='last'
              className='block font-bold mb-2'>
              Apellido
            </label>
            <input
              required
              type='text'
              id='last'
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none ${
                themeMode
                  ? 'focus:border-blue-500'
                  : 'focus:border-black bg-gray-500'
              }`}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='userName'
              className='block font-bold mb-2'>
              Username
            </label>
            <input
              type='text'
              required
              id='userName'
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
              required
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
      <div
        className={`${show} animate-slowDown right-2 md:right-10 bottom-20  fixed border p-5 rounded-2xl ${
          themeMode
            ? 'border-black bg-gray-300 text-green-900'
            : 'border-white bg-gray-800 text-green-400'
        }`}>
        usuario agregado correctamente
      </div>
    </>
  );
};
export default AddUser;
