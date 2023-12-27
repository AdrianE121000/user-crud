import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useUserStore } from '../store/users';
const EditUser = ({ user, setEditingUser }) => {
  const { themeMode } = useContext(ThemeContext);
  const editUser = useUserStore((state) => state.editUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: user.current.id,
      name: e.target[0].value,
      last: e.target[1].value,
      userName: e.target[2].value,
      email: e.target[3].value,
    };

    editUser(user.current.id, newUser);

    setEditingUser((prevState) => !prevState);
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
              type='text'
              id='name'
              placeholder={user.current.name}
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
              type='text'
              id='last'
              placeholder={user.current.last}
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
              id='userName'
              placeholder={user.current.userName}
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
