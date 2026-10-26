import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

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

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProgramCard = styled.div`
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
`;

const ProgramHeader = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem;
  color: white;
`;

const ProgramIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProgramTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProgramSubtitle = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ProgramBody = styled.div`
  padding: 1.5rem;
`;

const ProgramInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  color: #64748b;
  font-size: 0.85rem;
`;

const InfoItemValue = styled.div`
  color: #0f172a;
  font-weight: 600;
  font-size: 0.95rem;
`;

const ProgramProgress = styled.div`
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

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
`;

const ProgramAction = styled.div`
  text-align: center;
  padding: 0.75rem;
  background: #0f172a;
  color: white;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  ${ProgramCard}:hover & {
    background: #1e293b;
  }
`;

const CompletionSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const SectionTitle = styled.h2`
  color: #0f172a;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CompletionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CompletionCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
`;

const CompletionPercentage = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const CompletionLabel = styled.div`
  color: #64748b;
  font-size: 0.9rem;
`;

const Programas: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const allPrograms = [
    {
      id: 1,
      title: 'Ingeniería en Sistemas Computacionales',
      subtitle: 'Desarrollo de software y sistemas',
      icon: '💻',
      duration: '4 años',
      credits: 280,
      courses: 48,
      progress: 35,
      currentSemester: 'Semestre 4',
    },
    {
      id: 2,
      title: 'Licenciatura en Ciencias de Datos',
      subtitle: 'Análisis y visualización de datos',
      icon: '📊',
      duration: '4 años',
      credits: 260,
      courses: 44,
      progress: 35,
      currentSemester: 'Semestre 4',
    },
    {
      id: 3,
      title: 'Ingeniería en Robótica',
      subtitle: 'Automatización y mecatrónica',
      icon: '🤖',
      duration: '4 años',
      credits: 300,
      courses: 52,
      progress: 20,
      currentSemester: 'Semestre 2',
    },
  ];

  const programs = isAdmin ? allPrograms : allPrograms.filter(p => p.id === 1);

  return (
    <>
      <PageHeader>
        <PageTitle>Programas Académicos</PageTitle>
        <PageSubtitle>Visualiza tu progreso en los programas de estudio</PageSubtitle>
      </PageHeader>

      <ProgramsGrid>
        {programs.map((program) => (
          <ProgramCard key={program.id}>
            <ProgramHeader>
              <ProgramIcon>{program.icon}</ProgramIcon>
              <ProgramTitle>{program.title}</ProgramTitle>
              <ProgramSubtitle>{program.subtitle}</ProgramSubtitle>
            </ProgramHeader>
            <ProgramBody>
              <ProgramInfo>
                <InfoItem>
                  <div>Duración</div>
                  <InfoItemValue>{program.duration}</InfoItemValue>
                </InfoItem>
                <InfoItem>
                  <div>Créditos</div>
                  <InfoItemValue>{program.credits}</InfoItemValue>
                </InfoItem>
                <InfoItem>
                  <div>Cursos</div>
                  <InfoItemValue>{program.courses}</InfoItemValue>
                </InfoItem>
                <InfoItem>
                  <div>Actual</div>
                  <InfoItemValue>{program.currentSemester}</InfoItemValue>
                </InfoItem>
              </ProgramInfo>

              <ProgramProgress>
                <ProgressBar>
                  <ProgressFill progress={program.progress} />
                </ProgressBar>
                <ProgressText>
                  <span>Progreso del programa</span>
                  <span>{program.progress}%</span>
                </ProgressText>
              </ProgramProgress>

              <ProgramAction>Ver Plan de Estudios</ProgramAction>
            </ProgramBody>
          </ProgramCard>
        ))}
      </ProgramsGrid>

      <SectionTitle>Resumen de Progreso</SectionTitle>
      <CompletionSection>
        <CompletionGrid>
          <CompletionCard>
            <CompletionPercentage>35%</CompletionPercentage>
            <CompletionLabel>Programa Principal</CompletionLabel>
          </CompletionCard>
          <CompletionCard>
            <CompletionPercentage>85%</CompletionPercentage>
            <CompletionLabel>Semestre Actual</CompletionLabel>
          </CompletionCard>
          <CompletionCard>
            <CompletionPercentage>12</CompletionPercentage>
            <CompletionLabel>Cursos Completados</CompletionLabel>
          </CompletionCard>
          <CompletionCard>
            <CompletionPercentage>8.5</CompletionPercentage>
            <CompletionLabel>Promedio General</CompletionLabel>
          </CompletionCard>
        </CompletionGrid>
      </CompletionSection>
    </>
  );
};

export default Programas;
