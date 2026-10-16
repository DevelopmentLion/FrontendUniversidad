import styled from 'styled-components';

const PageHeader = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const PageTitle = styled.h1`
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const PageSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
`;

const SessionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SessionCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid #000;
  cursor: pointer;

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

const SessionHeader = styled.div`
  background: #0f172a;
  padding: 1.5rem;
  color: white;
  position: relative;
`;

const SessionBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.15);
  padding: 0.375rem 0.875rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const SessionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const SessionCourse = styled.p`
  opacity: 0.8;
  font-size: 0.85rem;
`;

const SessionBody = styled.div`
  padding: 1.5rem;
`;

const SessionInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SessionInfoItem = styled.div`
  color: #64748b;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SessionInstructor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
`;

const InstructorAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.75rem;
`;

const SessionAction = styled.div`
  text-align: center;
  padding: 0.75rem;
  background: #0f172a;
  color: white;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;

  ${SessionCard}:hover & {
    background: #1e293b;
  }
`;

const RecordingBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ef4444;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const Sesiones: React.FC = () => {

  const sessions = [
    {
      id: 1,
      title: 'Introducción a React',
      course: 'Programación Avanzada',
      instructor: 'Dr. Carlos Mendoza',
      date: '2024-10-20',
      time: '10:00 - 11:30',
      type: 'Clase',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Consultoría de Proyecto',
      course: 'Programación Avanzada',
      instructor: 'Dr. Carlos Mendoza',
      date: '2024-10-22',
      time: '14:00 - 15:00',
      type: 'Tutoría',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Examen Parcial',
      course: 'Bases de Datos',
      instructor: 'Dra. Ana Rodríguez',
      date: '2024-10-18',
      time: '09:00 - 11:00',
      type: 'Examen',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Repaso de Listas Enlazadas',
      course: 'Estructuras de Datos',
      instructor: 'Mtro. Luis García',
      date: '2024-10-21',
      time: '16:00 - 17:30',
      type: 'Clase',
      status: 'upcoming',
    },
    {
      id: 5,
      title: 'Introducción a GraphQL',
      course: 'Bases de Datos',
      instructor: 'Dra. Ana Rodríguez',
      date: '2024-10-19',
      time: '10:00 - 11:30',
      type: 'Clase',
      status: 'completed',
    },
  ];

  return (
    <>
      <PageHeader>
        <PageTitle>Sesiones en Vivo</PageTitle>
        <PageSubtitle>Asiste a tus clases, tutorías y exámenes en tiempo real</PageSubtitle>
      </PageHeader>

      <SessionsGrid>
        {sessions.map((session) => (
          <SessionCard 
            key={session.id} 

          >
            <SessionHeader>
              {session.status === 'completed' && <RecordingBadge>Grabación</RecordingBadge>}
              <SessionBadge>{session.type}</SessionBadge>
              <SessionTitle>{session.title}</SessionTitle>
              <SessionCourse>{session.course}</SessionCourse>
            </SessionHeader>
            <SessionBody>
              <SessionInfo>
                <SessionInfoItem>📅 {session.date}</SessionInfoItem>
                <SessionInfoItem>⏰ {session.time}</SessionInfoItem>
              </SessionInfo>

              <SessionInstructor>
                <InstructorAvatar>👨‍🏫</InstructorAvatar>
                <span>{session.instructor}</span>
              </SessionInstructor>

              <SessionAction>
                {session.status === 'upcoming' ? 'Unirse a la sesión' : 'Ver grabación'}
              </SessionAction>
            </SessionBody>
          </SessionCard>
        ))}
      </SessionsGrid>
    </>
  );
};

export default Sesiones;
