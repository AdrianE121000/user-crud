import { useContext } from 'react';
import { DeleteIcon, EditIcon } from './Icons';
import { ThemeContext } from '../context/ThemeContext';
import { useUserStore } from '../store/users';
import EditUser from './EditUser';
import { useState } from 'react';
import { useRef } from 'react';

const Users = () => {
  const { themeMode } = useContext(ThemeContext);
  const [editingUser, setEditingUser] = useState(false);
  const user = useRef({});
  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const [show, setShow] = useState('hidden');

  const handleEdit = (id) => {
    const userForEdit = users.filter((user) => user.login.uuid === id);
    user.current = userForEdit[0];

    setEditingUser(!editingUser);
  };

  const handleClick = () => {
    fetchUsers();
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-5'>
        <button
          className={`border w-auto rounded-2xl px-5 py-2 mb-2 ${
            themeMode
              ? 'border-black hover:bg-gray-300'
              : 'border-white hover:bg-gray-950'
          }`}
          onClick={handleClick}>
          Obtener usuarios randoms
        </button>

        <table className='table-auto mt-3 w-4/5'>
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
            {users.map((data, index) => (
              <tr key={data.login.uuid}>
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
                  {data.name.first}
                </td>
                <td
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  {data.name.last}
                </td>
                <td
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  {data.login.username}
                </td>
                <td
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  {data.email}
                </td>
                <td
                  className={`px-4 py-2 border ${
                    themeMode ? 'border-black' : 'border-white'
                  }`}>
                  <button
                    onClick={() => handleEdit(data.login.uuid)}
                    className='mr-2'>
                    <EditIcon />
                  </button>
                  <button onClick={() => deleteUser(data.login.uuid)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <EditUser
            setEditingUser={setEditingUser}
            user={user}
            setShow={setShow}
          />
        </div>
      )}
      <div
        className={`${show} animate-slowDown right-2 md:right-10 bottom-20  fixed border p-5 rounded-2xl ${
          themeMode
            ? 'border-black bg-gray-300 text-green-900'
            : 'border-white bg-gray-800 text-green-400'
        }`}>
        usuario editado correctamente
      </div>
    </>
  );
};

export default Users;
