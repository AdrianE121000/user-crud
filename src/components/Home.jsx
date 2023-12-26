import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='container mx-auto px-4 text-center mt-10'>
        <h1 className='text-4xl'>User CRUD</h1>
        <p className='text-lg mt-4'>Elige una opcion.</p>
        <div className='flex flex-row justify-center gap-5 mt-5'>
          <button
            onClick={() => navigate('/users')}
            className='border border-gray-700 px-5 rounded-lg'>
            Ver Lista de usuarios
          </button>
          <button
            onClick={() => navigate('/add')}
            className='border border-gray-700 px-5 rounded-lg'>
            Agregar usuario
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
