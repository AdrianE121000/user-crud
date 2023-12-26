import { useContext } from 'react';
import { DeleteIcon, EditIcon } from './Icons';
import { ThemeContext } from '../context/ThemeContext';

const Users = () => {
  const { themeMode } = useContext(ThemeContext);
  const users = [
    {
      id: 1,
      name: 'Adrian',
      last: 'Perez',
      userName: 'Adriane121000',
      email: 'exaple@gmail.com',
    },
  ];
  return (
    <>
      <div className='flex h-screen justify-center mt-5 text-left'>
        <div className='overflow-x-auto'>
          <table className='table-auto w-auto'>
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  ID
                </th>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  Nombre
                </th>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  Apellido
                </th>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  Nombre De Usuario
                </th>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  Email
                </th>
                <th
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    {index + 1}
                  </td>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    {user.name}
                  </td>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    {user.last}
                  </td>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    {user.userName}
                  </td>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    {user.email}
                  </td>
                  <td
                    className={`px-4 py-2 border ${
                      themeMode ? 'border-black' : 'border-white'
                    }`}>
                    <button className='mr-2'>
                      <EditIcon />
                    </button>
                    <button>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
