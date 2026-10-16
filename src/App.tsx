import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import Login from './pages/Login';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Aulas from './pages/Aulas';
import Profile from './pages/Profile';
import Sesiones from './pages/Sesiones';
import Calendario from './pages/Calendario';
import Calificaciones from './pages/Calificaciones';
import Foros from './pages/Foros';
import Programas from './pages/Programas';

function App() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ fontSize: '1.5rem', color: '#0f172a' }}>Cargando...</div>
    </div>;
  }

  const sidebarItems = [
    { path: '/', label: 'Inicio' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/aulas', label: 'Aulas Virtuales' },
    { path: '/sesiones', label: 'Sesiones' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/programas', label: 'Programas' },
    { path: '/foros', label: 'Foros' },
    { path: '/calificaciones', label: 'Calificaciones' },
  ];

  const defaultUser = {
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@universidad.edu',
    courses: 7,
    average: 8.5,
  };

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout user={user || defaultUser} sidebarItems={sidebarItems}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/aulas" element={<Aulas />} />
                  <Route path="/sesiones" element={<Sesiones />} />
                  <Route path="/calendario" element={<Calendario />} />
                  <Route path="/programas" element={<Programas />} />
                  <Route path="/foros" element={<Foros />} />
                  <Route path="/calificaciones" element={<Calificaciones />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
