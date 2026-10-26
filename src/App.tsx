import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import Login from './pages/Login';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Aulas from './pages/Aulas';
import Profile from './pages/Profile';
import Sesiones from './pages/Sesiones';
import Calendario from './pages/Calendario';
import Calificaciones from './pages/Calificaciones';
import Foros from './pages/Foros';
import Programas from './pages/Programas';
import Pagos from './pages/Pagos';
import CreateGoogleCourse from './components/CreateGoogleCourse';

function App() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ fontSize: '1.5rem', color: '#0f172a' }}>Cargando...</div>
    </div>;
  }

  const userRole = user?.role || 'student';

  console.log('=== DEBUG APP ===');
  console.log('Usuario completo:', user);
  console.log('Rol del usuario:', user?.role);
  console.log('Email del usuario:', user?.email);
  console.log('Rol asignado final:', userRole);
  console.log('Sidebar items:', userRole === 'admin' ? 'admin' : userRole === 'teacher' ? 'teacher' : 'student');
  console.log('==================');

  const studentSidebarItems = [
    { path: '/', label: 'Inicio' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/aulas', label: 'Aulas Virtuales' },
    { path: '/sesiones', label: 'Sesiones' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/programas', label: 'Programas' },
    { path: '/foros', label: 'Foros' },
    { path: '/calificaciones', label: 'Calificaciones' },
    { path: '/pagos', label: 'Pagos' },
  ];

  const teacherSidebarItems = [
    { path: '/', label: 'Inicio' },
    { path: '/teacher-dashboard', label: 'Dashboard Docente' },
    { path: '/aulas', label: 'Aulas Virtuales' },
    { path: '/sesiones', label: 'Sesiones' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/calificaciones', label: 'Calificaciones' },
    { path: '/foros', label: 'Foros' },
    { path: '/google-classroom', label: 'Google Classroom' },
  ];

  const adminSidebarItems = [
    { path: '/', label: 'Inicio' },
    { path: '/admin-dashboard', label: 'Panel Admin' },
    { path: '/aulas', label: 'Aulas Virtuales' },
    { path: '/sesiones', label: 'Sesiones' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/calificaciones', label: 'Calificaciones' },
    { path: '/foros', label: 'Foros' },
    { path: '/programas', label: 'Programas' },
    { path: '/pagos', label: 'Pagos' },
  ];

  const sidebarItems = userRole === 'admin' ? adminSidebarItems : userRole === 'teacher' ? teacherSidebarItems : studentSidebarItems;

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
                  <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/aulas" element={<Aulas />} />
                  <Route path="/sesiones" element={<Sesiones />} />
                  <Route path="/calendario" element={<Calendario />} />
                  <Route path="/programas" element={<Programas />} />
                  <Route path="/foros" element={<Foros />} />
                  <Route path="/calificaciones" element={<Calificaciones />} />
                  <Route path="/pagos" element={<Pagos />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/google-classroom" element={<CreateGoogleCourse />} />
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
