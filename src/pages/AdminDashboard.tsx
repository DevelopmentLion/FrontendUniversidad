import styled from 'styled-components';

const WelcomeSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const WelcomeTitle = styled.h1`
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const WelcomeSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  border: 2px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    border-color: #3b82f6;
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #0f172a;
  border-radius: 8px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #0f172a;
  font-weight: 600;
`;

const AdminGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const AdminCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 2px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    border-color: #3b82f6;
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const CardAction = styled.div`
  color: #3b82f6;
  font-size: 0.85rem;
  font-weight: 500;
`;

const RecentActivity = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #0f172a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const ActivityTime = styled.div`
  font-size: 0.8rem;
  color: #64748b;
`;

const AdminDashboard: React.FC = () => {
  const stats = {
    totalUsers: 1250,
    activeCourses: 45,
    totalTeachers: 35,
    totalStudents: 1200,
    pendingApprovals: 8,
    systemStatus: 'Online',
  };

  const adminTools = [
    {
      id: 1,
      icon: '👥',
      title: 'Gestión de Usuarios',
      description: 'Administra estudiantes, docentes y personal administrativo',
      action: 'Administrar usuarios',
    },
    {
      id: 2,
      icon: '📚',
      title: 'Gestión de Cursos',
      description: 'Crea, edita y administra los cursos académicos',
      action: 'Administrar cursos',
    },
    {
      id: 3,
      icon: '🏛️',
      title: 'Gestión de Programas',
      description: 'Configura programas académicos y planes de estudio',
      action: 'Administrar programas',
    },
    {
      id: 4,
      icon: '💰',
      title: 'Gestión de Pagos',
      description: 'Supervisa pagos, genera reportes y configura tarifas',
      action: 'Administrar pagos',
    },
    {
      id: 5,
      icon: '📊',
      title: 'Reportes y Estadísticas',
      description: 'Genera reportes de rendimiento y métricas del sistema',
      action: 'Ver reportes',
    },
    {
      id: 6,
      icon: '⚙️',
      title: 'Configuración del Sistema',
      description: 'Ajusta parámetros globales y configuraciones',
      action: 'Configurar sistema',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      icon: '👤',
      title: 'Nuevo estudiante registrado: Ana López',
      time: 'hace 10 minutos',
    },
    {
      id: 2,
      icon: '📝',
      title: 'Calificación masiva completada en Bases de Datos',
      time: 'hace 1 hora',
    },
    {
      id: 3,
      icon: '💳',
      title: 'Pago procesado: Juan Pérez - Colegiatura Octubre',
      time: 'hace 2 horas',
    },
    {
      id: 4,
      icon: '📚',
      title: 'Nuevo curso creado: Machine Learning Avanzado',
      time: 'hace 3 horas',
    },
  ];

  return (
    <>
      <WelcomeSection>
        <WelcomeTitle>Panel de Administración</WelcomeTitle>
        <WelcomeSubtitle>Gestiona la plataforma universitaria y supervisa todas las operaciones</WelcomeSubtitle>
      </WelcomeSection>

      <StatsGrid>
        <StatCard>
          <StatIcon>👥</StatIcon>
          <StatNumber>{stats.totalUsers}</StatNumber>
          <StatLabel>Usuarios Totales</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>📚</StatIcon>
          <StatNumber>{stats.activeCourses}</StatNumber>
          <StatLabel>Cursos Activos</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>👨‍🏫</StatIcon>
          <StatNumber>{stats.totalTeachers}</StatNumber>
          <StatLabel>Docentes</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>🎓</StatIcon>
          <StatNumber>{stats.totalStudents}</StatNumber>
          <StatLabel>Estudiantes</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>⏳</StatIcon>
          <StatNumber>{stats.pendingApprovals}</StatNumber>
          <StatLabel>Pendientes</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>🟢</StatIcon>
          <StatNumber>{stats.systemStatus}</StatNumber>
          <StatLabel>Estado del Sistema</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Herramientas de Administración</SectionTitle>
      <AdminGrid>
        {adminTools.map((tool) => (
          <AdminCard key={tool.id}>
            <CardIcon>{tool.icon}</CardIcon>
            <CardTitle>{tool.title}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
            <CardAction>{tool.action} →</CardAction>
          </AdminCard>
        ))}
      </AdminGrid>

      <SectionTitle>Actividad Reciente del Sistema</SectionTitle>
      <RecentActivity>
        {recentActivity.map((activity) => (
          <ActivityItem key={activity.id}>
            <ActivityIcon>{activity.icon}</ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityTime>{activity.time}</ActivityTime>
            </ActivityContent>
          </ActivityItem>
        ))}
      </RecentActivity>
    </>
  );
};

export default AdminDashboard;
