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

const ClassroomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const ClassroomCard = styled.div`
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

const ClassroomImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
`;

const ClassroomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;

  ${ClassroomCard}:hover & {
    transform: scale(1.02);
  }
`;

const ClassroomHeader = styled.div`
  background: #0f172a;
  padding: 1.25rem;
  color: white;
  position: relative;
`;

const ClassroomBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255,255,255,0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const ClassroomTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ClassroomCode = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ClassroomBody = styled.div`
  padding: 2rem;
`;

const ClassroomInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  color: #64748b;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Instructor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

const InstructorInfo = styled.div``;

const InstructorName = styled.h4`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 0.85rem;
`;

const InstructorTitle = styled.p`
  color: #64748b;
  font-size: 0.75rem;
`;

const ClassroomStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const StatBox = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;

const ClassroomAction = styled.div`
  text-align: center;
  padding: 1rem;
  background: #0f172a;
  color: white;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s;

  ${ClassroomCard}:hover & {
    background: #1e293b;
  }
`;

const Aulas: React.FC = () => {

  const classrooms = [
    {
      id: 1,
      title: 'Robótica',
      code: 'ROB-101',
      credits: 8,
      semester: 'Semestre 4',
      schedule: 'Miércoles 16:00 - 18:00',
      virtualRoom: 'Virtual 1',
      instructor: 'Ing. Roberto Castro',
      instructorTitle: 'Profesor Titular',
      initials: 'RC',
      topics: 8,
      progress: 60,
      grade: 8.7,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Programación Avanzada',
      code: 'ING-204',
      credits: 8,
      semester: 'Semestre 4',
      schedule: 'Lun - Mie 14:00',
      virtualRoom: 'Virtual 1',
      instructor: 'Dr. Carlos Mendoza',
      instructorTitle: 'Profesor Titular',
      initials: 'CM',
      topics: 12,
      progress: 85,
      grade: 9.2,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Bases de Datos',
      code: 'ING-301',
      credits: 8,
      semester: 'Semestre 4',
      schedule: 'Mar - Jue 10:00',
      virtualRoom: 'Virtual 2',
      instructor: 'Dra. Ana Rodríguez',
      instructorTitle: 'Profesora Asociada',
      initials: 'AR',
      topics: 10,
      progress: 72,
      grade: 8.8,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Estructuras de Datos',
      code: 'ING-205',
      credits: 8,
      semester: 'Semestre 4',
      schedule: 'Vie 09:00 - 12:00',
      virtualRoom: 'Virtual 3',
      instructor: 'Mtro. Luis García',
      instructorTitle: 'Profesor Asociado',
      initials: 'LG',
      topics: 15,
      progress: 65,
      grade: 8.5,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Matemáticas Discretas',
      code: 'MAT-201',
      credits: 6,
      semester: 'Semestre 4',
      schedule: 'Lun - Mie 16:00',
      virtualRoom: 'Virtual 4',
      instructor: 'Dra. María López',
      instructorTitle: 'Profesora Titular',
      initials: 'ML',
      topics: 8,
      progress: 58,
      grade: 8.0,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Inglés Técnico IV',
      code: 'ING-404',
      credits: 4,
      semester: 'Semestre 4',
      schedule: 'Jue 14:00 - 16:00',
      virtualRoom: 'Virtual 5',
      instructor: 'Prof. Sarah Johnson',
      instructorTitle: 'Profesora Asociada',
      initials: 'SJ',
      topics: 6,
      progress: 90,
      grade: 9.5,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop'
    },
  ];

  return (
    <>
      <PageHeader>
        <PageTitle>Aulas Virtuales</PageTitle>
        <PageSubtitle>Accede a todas tus materias y recursos de aprendizaje</PageSubtitle>
      </PageHeader>

      <ClassroomsGrid>
        {classrooms.map((classroom) => (
          <ClassroomCard 
            key={classroom.id} 


          >
            <ClassroomImage>
              <ClassroomImg src={classroom.image} alt={classroom.title} />
            </ClassroomImage>
            <ClassroomHeader>
              <ClassroomBadge>{classroom.semester}</ClassroomBadge>
              <ClassroomTitle>{classroom.title}</ClassroomTitle>
              <ClassroomCode>{classroom.code} | Créditos: {classroom.credits}</ClassroomCode>
            </ClassroomHeader>
            <ClassroomBody>
              <ClassroomInfo>
                <InfoItem>📅 {classroom.schedule}</InfoItem>
                <InfoItem>💻 {classroom.virtualRoom}</InfoItem>
              </ClassroomInfo>

              <Instructor>
                <InstructorAvatar>{classroom.initials}</InstructorAvatar>
                <InstructorInfo>
                  <InstructorName>{classroom.instructor}</InstructorName>
                  <InstructorTitle>{classroom.instructorTitle}</InstructorTitle>
                </InstructorInfo>
              </Instructor>

              <ClassroomStats>
                <StatBox>
                  <StatNumber>{classroom.topics}</StatNumber>
                  <StatLabel>Temas</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>{classroom.progress}%</StatNumber>
                  <StatLabel>Progreso</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>{classroom.grade}</StatNumber>
                  <StatLabel>Calificación</StatLabel>
                </StatBox>
              </ClassroomStats>

              <ClassroomAction>
                <span>Entrar al Aula</span>
              </ClassroomAction>
            </ClassroomBody>
          </ClassroomCard>
        ))}
      </ClassroomsGrid>
    </>
  );
};

export default Aulas;
