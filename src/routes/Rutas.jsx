import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Users from '../components/Users';
import AddUser from '../components/AddUser';
import EditUser from '../components/EditUser';

export function Rutas() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/users'
          element={<Users />}
        />
        <Route
          path='/add'
          element={<AddUser />}
        />
        <Route
          path='/edit'
          element={<EditUser />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
}
