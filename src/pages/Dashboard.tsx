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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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

const CourseHeader = styled.div`
  background: linear-gradient(135deg, #3949ab 0%, #5c6bc0 100%);
  padding: 1.5rem;
  color: white;
`;

const CourseBody = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
  font-weight: 600;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #64748b;
`;

const CourseProgress = styled.div`
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

const UpcomingSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const UpcomingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
`;

const UpcomingDate = styled.div`
  background: #0f172a;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  min-width: 70px;
`;

const UpcomingDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const UpcomingMonth = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const UpcomingInfo = styled.div`
  flex: 1;
`;

const UpcomingInfoTitle = styled.h4`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const UpcomingInfoTime = styled.p`
  color: #64748b;
  font-size: 0.85rem;
`;

const UpcomingType = styled.span<{ type: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    if (props.type === 'exam') return '#ef4444';
    if (props.type === 'class') return '#10b981';
    if (props.type === 'assignment') return '#f59e0b';
    return '#3b82f6';
  }};
  color: white;
`;

const Dashboard: React.FC = () => {
  const courses = [
    { id: 1, title: 'Programación Avanzada', code: 'ING-204', progress: 85, instructor: 'Dr. Carlos Mendoza' },
    { id: 2, title: 'Bases de Datos', code: 'ING-301', progress: 72, instructor: 'Dra. Ana Rodríguez' },
    { id: 3, title: 'Estructuras de Datos', code: 'ING-205', progress: 65, instructor: 'Mtro. Luis García' },
  ];

  const upcoming = [
    { day: 15, month: 'OCT', title: 'Examen Final - Programación Avanzada', time: '14:00 - 16:00 hrs', type: 'exam' },
    { day: 18, month: 'OCT', title: 'Sesión en Vivo - Estructuras de Datos', time: '10:00 - 11:30 hrs', type: 'class' },
    { day: 20, month: 'OCT', title: 'Entrega de Proyecto - Bases de Datos', time: '23:59 hrs', type: 'assignment' },
  ];

  return (
    <>
      <WelcomeSection>
        <WelcomeTitle>Bienvenido de nuevo, Juan</WelcomeTitle>
        <WelcomeSubtitle>Continúa tu aprendizaje y mantente al día con tus cursos</WelcomeSubtitle>
      </WelcomeSection>

      <StatsGrid>
        <StatCard>
          <StatIcon>📚</StatIcon>
          <StatNumber>7</StatNumber>
          <StatLabel>Cursos Activos</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>📊</StatIcon>
          <StatNumber>75%</StatNumber>
          <StatLabel>Progreso General</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>⭐</StatIcon>
          <StatNumber>8.5</StatNumber>
          <StatLabel>Promedio</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>⏱️</StatIcon>
          <StatNumber>124</StatNumber>
          <StatLabel>Horas de Estudio</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Mis Cursos</SectionTitle>
      <CoursesGrid>
        {courses.map((course) => (
          <CourseCard key={course.id} onClick={() => {}}>
            <CourseHeader>
              <CourseTitle>{course.title}</CourseTitle>
            </CourseHeader>
            <CourseBody>
              <CourseMeta>
                <span>{course.code}</span>
                <span>{course.instructor}</span>
              </CourseMeta>
              <CourseProgress>
                <ProgressBar>
                  <ProgressFill progress={course.progress} />
                </ProgressBar>
              </CourseProgress>
              <CourseMeta>
                <span>Progreso: {course.progress}%</span>
              </CourseMeta>
            </CourseBody>
          </CourseCard>
        ))}
      </CoursesGrid>

      <SectionTitle>Próximas Actividades</SectionTitle>
      <UpcomingSection>
        {upcoming.map((item, index) => (
          <UpcomingItem key={index}>
            <UpcomingDate>
              <UpcomingDay>{item.day}</UpcomingDay>
              <UpcomingMonth>{item.month}</UpcomingMonth>
            </UpcomingDate>
            <UpcomingInfo>
              <UpcomingInfoTitle>{item.title}</UpcomingInfoTitle>
              <UpcomingInfoTime>{item.time}</UpcomingInfoTime>
            </UpcomingInfo>
            <UpcomingType type={item.type}>
              {item.type === 'exam' ? 'Examen' : item.type === 'class' ? 'Clase' : 'Tarea'}
            </UpcomingType>
          </UpcomingItem>
        ))}
      </UpcomingSection>
    </>
  );
};

export default Dashboard;
