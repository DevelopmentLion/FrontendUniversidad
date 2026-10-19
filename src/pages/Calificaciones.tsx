import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

const PageHeader = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const AddButton = styled.button`
  background: #0f172a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const StatsContainer = styled.div`
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

const GradesTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const TableHeader = styled.div`
  background: #0f172a;
  color: white;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  font-weight: 600;
`;

const TableRow = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const CourseName = styled.div`
  font-weight: 600;
  color: #0f172a;
`;

const CourseCode = styled.div`
  color: #64748b;
  font-size: 0.85rem;
`;

const Grade = styled.div<{ passing: boolean }>`
  font-weight: 600;
  color: ${props => props.passing ? '#10b981' : '#ef4444'};
`;

const GradeBadge = styled.span<{ grade: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    if (props.grade === 'A') return '#10b981';
    if (props.grade === 'B') return '#3b82f6';
    if (props.grade === 'C') return '#f59e0b';
    return '#ef4444';
  }};
  color: white;
`;

const Calificaciones: React.FC = () => {
  const { user } = useAuth();
  const isTeacher = user?.role === 'teacher';

  const grades = [
    {
      id: 1,
      course: 'Programación Avanzada',
      code: 'ING-204',
      credits: 8,
      midterm: 8.5,
      final: 9.2,
      average: 8.85,
      grade: 'A',
    },
    {
      id: 2,
      course: 'Bases de Datos',
      code: 'ING-301',
      credits: 8,
      midterm: 8.7,
      final: 8.9,
      average: 8.8,
      grade: 'A',
    },
    {
      id: 3,
      course: 'Estructuras de Datos',
      code: 'ING-205',
      credits: 8,
      midterm: 8.0,
      final: 8.5,
      average: 8.25,
      grade: 'A',
    },
    {
      id: 4,
      course: 'Matemáticas Discretas',
      code: 'MAT-201',
      credits: 6,
      midterm: 7.5,
      final: 8.0,
      average: 7.75,
      grade: 'B',
    },
    {
      id: 5,
      course: 'Inglés Técnico IV',
      code: 'ING-404',
      credits: 4,
      midterm: 9.5,
      final: 9.5,
      average: 9.5,
      grade: 'A',
    },
    {
      id: 6,
      course: 'Robótica',
      code: 'ROB-101',
      credits: 8,
      midterm: 8.7,
      final: 8.7,
      average: 8.7,
      grade: 'A',
    },
  ];

  const totalCredits = grades.reduce((sum, g) => sum + g.credits, 0);
  const weightedAverage = grades.reduce((sum, g) => sum + (g.average * g.credits), 0) / totalCredits;
  const averageGrade = grades.reduce((sum, g) => sum + g.average, 0) / grades.length;

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Calificaciones</PageTitle>
          <PageSubtitle>{isTeacher ? 'Gestiona las calificaciones de tus estudiantes' : 'Revisa tus notas y rendimiento académico'}</PageSubtitle>
        </div>
        {isTeacher && (
          <HeaderActions>
            <AddButton>+ Registrar Calificación</AddButton>
          </HeaderActions>
        )}
      </PageHeader>

      <StatsContainer>
        <StatCard>
          <StatNumber>{grades.length}</StatNumber>
          <StatLabel>Cursos</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{totalCredits}</StatNumber>
          <StatLabel>Créditos Totales</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{averageGrade.toFixed(2)}</StatNumber>
          <StatLabel>Promedio</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{weightedAverage.toFixed(2)}</StatNumber>
          <StatLabel>Promedio Ponderado</StatLabel>
        </StatCard>
      </StatsContainer>

      <GradesTable>
        <TableHeader>
          <div>Materia</div>
          <div>Créditos</div>
          <div>Parcial</div>
          <div>Final</div>
          <div>Promedio</div>
          <div>Calificación</div>
        </TableHeader>
        {grades.map((grade) => (
          <TableRow key={grade.id}>
            <div>
              <CourseName>{grade.course}</CourseName>
              <CourseCode>{grade.code}</CourseCode>
            </div>
            <div>{grade.credits}</div>
            <Grade passing={grade.midterm >= 7}>{grade.midterm}</Grade>
            <Grade passing={grade.final >= 7}>{grade.final}</Grade>
            <Grade passing={grade.average >= 7}>{grade.average.toFixed(2)}</Grade>
            <GradeBadge grade={grade.grade}>{grade.grade}</GradeBadge>
          </TableRow>
        ))}
      </GradesTable>
    </>
  );
};

export default Calificaciones;
