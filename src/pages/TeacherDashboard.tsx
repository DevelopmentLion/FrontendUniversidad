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
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
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

const PendingGrades = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
  margin-bottom: 2rem;
`;

const GradeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #3b82f6;
  }
`;

const GradeInfo = styled.div`
  flex: 1;
`;

const GradeStudent = styled.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const GradeCourse = styled.div`
  font-size: 0.85rem;
  color: #64748b;
`;

const GradeAction = styled.button`
  background: #0f172a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const UpcomingClasses = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const ClassItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
`;

const ClassDate = styled.div`
  background: #0f172a;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  min-width: 70px;
`;

const ClassDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ClassMonth = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const ClassInfo = styled.div`
  flex: 1;
`;

const ClassInfoTitle = styled.h4`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const ClassInfoTime = styled.p`
  color: #64748b;
  font-size: 0.85rem;
`;

const ClassStudents = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #3b82f6;
  color: white;
`;

const TeacherDashboard: React.FC = () => {
  const courses = [
    { id: 1, title: 'Programación Avanzada', code: 'ING-204', students: 35, schedule: 'Lun/Mie 14:00-16:00' },
    { id: 2, title: 'Bases de Datos', code: 'ING-301', students: 42, schedule: 'Mar/Jue 10:00-12:00' },
    { id: 3, title: 'Estructuras de Datos', code: 'ING-205', students: 38, schedule: 'Vie 09:00-11:00' },
  ];

  const pendingGrades = [
    { id: 1, student: 'María González', course: 'Programación Avanzada', assignment: 'Proyecto Final' },
    { id: 2, student: 'Carlos Rodríguez', course: 'Bases de Datos', assignment: 'Examen Parcial' },
    { id: 3, student: 'Ana Martínez', course: 'Programación Avanzada', assignment: 'Tarea 5' },
    { id: 4, student: 'Pedro Sánchez', course: 'Estructuras de Datos', assignment: 'Laboratorio 3' },
  ];

  const upcomingClasses = [
    { day: 18, month: 'OCT', title: 'Programación Avanzada - Sesión 12', time: '14:00 - 16:00 hrs', students: 35 },
    { day: 19, month: 'OCT', title: 'Bases de Datos - Sesión 11', time: '10:00 - 12:00 hrs', students: 42 },
    { day: 20, month: 'OCT', title: 'Estructuras de Datos - Sesión 8', time: '09:00 - 11:00 hrs', students: 38 },
  ];

  return (
    <>
      <WelcomeSection>
        <WelcomeTitle>Bienvenido, Profesor</WelcomeTitle>
        <WelcomeSubtitle>Gestiona tus cursos, estudiantes y calificaciones</WelcomeSubtitle>
      </WelcomeSection>

      <StatsGrid>
        <StatCard>
          <StatIcon>📚</StatIcon>
          <StatNumber>{courses.length}</StatNumber>
          <StatLabel>Cursos Asignados</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>👥</StatIcon>
          <StatNumber>{courses.reduce((sum, c) => sum + c.students, 0)}</StatNumber>
          <StatLabel>Estudiantes Totales</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>📝</StatIcon>
          <StatNumber>{pendingGrades.length}</StatNumber>
          <StatLabel>Calificaciones Pendientes</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>📅</StatIcon>
          <StatNumber>{upcomingClasses.length}</StatNumber>
          <StatLabel>Clases Esta Semana</StatLabel>
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
                <span>{course.schedule}</span>
              </CourseMeta>
              <CourseMeta>
                <span>Estudiantes: {course.students}</span>
              </CourseMeta>
            </CourseBody>
          </CourseCard>
        ))}
      </CoursesGrid>

      <SectionTitle>Calificaciones Pendientes</SectionTitle>
      <PendingGrades>
        {pendingGrades.map((grade) => (
          <GradeItem key={grade.id}>
            <GradeInfo>
              <GradeStudent>{grade.student}</GradeStudent>
              <GradeCourse>{grade.course} - {grade.assignment}</GradeCourse>
            </GradeInfo>
            <GradeAction>Calificar</GradeAction>
          </GradeItem>
        ))}
      </PendingGrades>

      <SectionTitle>Próximas Clases</SectionTitle>
      <UpcomingClasses>
        {upcomingClasses.map((classItem, index) => (
          <ClassItem key={index}>
            <ClassDate>
              <ClassDay>{classItem.day}</ClassDay>
              <ClassMonth>{classItem.month}</ClassMonth>
            </ClassDate>
            <ClassInfo>
              <ClassInfoTitle>{classItem.title}</ClassInfoTitle>
              <ClassInfoTime>{classItem.time}</ClassInfoTime>
            </ClassInfo>
            <ClassStudents>{classItem.students} estudiantes</ClassStudents>
          </ClassItem>
        ))}
      </UpcomingClasses>
    </>
  );
};

export default TeacherDashboard;
