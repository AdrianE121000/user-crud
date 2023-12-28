import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useUserStore } from '../store/users';

const EditUser = ({ user, setEditingUser, setShow }) => {
  const { themeMode } = useContext(ThemeContext);
  const editUser = useUserStore((state) => state.editUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: {
        first: e.target[0].value,
        last: e.target[1].value,
      },
      email: e.target[3].value,
      login: {
        uuid: user.current.login.uuid,
        username: e.target[2].value,
      },
    };

    editUser(user.current.login.uuid, newUser);

    setEditingUser((prevState) => !prevState);

    setShow((state) => (state === 'hidden' ? 'block' : 'hidden'));

    setTimeout(() => {
      setShow((state) => (state === 'hidden' ? 'block' : 'hidden'));
    }, 2500);
  };

  return (
    <>
      <div
        className={`absolute max-w-md mx-auto mt-10 p-6 rounded-lg shadow-xl ${
          themeMode ? 'bg-gray-300' : 'bg-gray-700'
        }`}>
        <h1 className='text-2xl font-bold mb-4'>Editar Usuario</h1>
        <form onSubmit={handleSubmit}>
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
              placeholder={user.current.name.first}
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
              placeholder={user.current.name.last}
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
              required
              type='text'
              id='userName'
              placeholder={user.current.login.username}
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
              placeholder={user.current.email}
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
            Editar Usuario
          </button>
        </form>
      </div>
    </>
  );
};
export default EditUser;
