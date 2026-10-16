import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const IndexContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
`;

const ButtonPrimary = styled(Button)`
  background: #3b82f6;
  color: white;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }
`;

const ButtonSecondary = styled(Button)`
  background: rgba(255,255,255,0.1);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);

  &:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.5);
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: #f8fafc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 3px solid #1e3a8a;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    border-color: #fbbf24;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 12px 12px 0 0;
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  border: 2px solid #fbbf24;
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const StatsSection = styled.section`
  background: #0f172a;
  color: white;
  padding: 4rem 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Footer = styled.footer`
  background: #0f172a;
  color: white;
  padding: 3rem 2rem;
  border-top: 1px solid #1e293b;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterText = styled.p`
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const Index: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🎓',
      title: 'Educación de Calidad',
      description: 'Programas académicos de excelencia con reconocimiento nacional e internacional, diseñados para formar profesionales competentes.',
    },
    {
      icon: '💻',
      title: 'Aulas Virtuales',
      description: 'Plataforma de aprendizaje en línea de última generación con herramientas interactivas y recursos multimedia.',
    },
    {
      icon: '👨‍🏫',
      title: 'Profesores Expertos',
      description: 'Cuerpo docente con amplia experiencia en el campo profesional y académico, comprometidos con tu éxito.',
    },
    {
      icon: '📚',
      title: 'Recursos Digitales',
      description: 'Biblioteca digital completa con acceso a miles de libros, artículos y materiales de estudio en línea.',
    },
    {
      icon: '🤝',
      title: 'Comunidad Activa',
      description: 'Red de alumnos y egresados que fomentan el networking y el desarrollo profesional continuo.',
    },
    {
      icon: '🏆',
      title: 'Certificación Oficial',
      description: 'Títulos y certificados reconocidos por las autoridades educativas y el sector empresarial.',
    },
  ];

  return (
    <IndexContainer>
      <HeroSection>
        <HeroTitle>Universidad - Plataforma de Aprendizaje</HeroTitle>
        <HeroSubtitle>
          Transforma tu futuro con nuestra plataforma educativa de vanguardia. 
          Accede a cursos, recursos y herramientas diseñadas para tu éxito académico.
        </HeroSubtitle>
        <HeroButtons>
          <ButtonPrimary onClick={() => navigate('/login')}>Iniciar Sesión</ButtonPrimary>
          <ButtonSecondary onClick={() => navigate('/login')}>Registrarse</ButtonSecondary>
        </HeroButtons>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>¿Por qué Elegirnos?</SectionTitle>
        <SectionSubtitle>
          Descubre las ventajas que nos hacen líderes en educación superior y tecnología educativa
        </SectionSubtitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection>
        <StatsGrid>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>Programas Académicos</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>10K+</StatNumber>
            <StatLabel>Estudiantes Activos</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>200+</StatNumber>
            <StatLabel>Profesores</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>95%</StatNumber>
            <StatLabel>Tasa de Empleo</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <Footer>
        <FooterContent>
          <FooterText>© 2024 Universidad - Plataforma de Aprendizaje. Todos los derechos reservados.</FooterText>
          <FooterText>Desarrollado con React + TypeScript</FooterText>
        </FooterContent>
      </Footer>
    </IndexContainer>
  );
};

export default Index;
