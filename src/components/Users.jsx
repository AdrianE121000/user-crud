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

  const handleEdit = (id) => {
    const userForEdit = users.filter((user) => user.id === id);
    user.current = userForEdit[0];

    setEditingUser(!editingUser);
  };

  return (
    <>
      <div className='flex h-auto justify-center mt-5 text-left'>
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
                    <button
                      onClick={() => handleEdit(user.id)}
                      className='mr-2'>
                      <EditIcon />
                    </button>
                    <button onClick={() => deleteUser(user.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {editingUser && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <EditUser
            setEditingUser={setEditingUser}
            user={user}
          />
        </div>
      )}
    </>
  );
};

export default Users;
