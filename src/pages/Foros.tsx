import styled from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import ForumForm from '../components/ForumForm';

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

const ForumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ForumCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
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

const ForumHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ForumIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #0f172a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const ForumInfo = styled.div`
  flex: 1;
`;

const ForumTitle = styled.h3`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ForumSubtitle = styled.p`
  color: #64748b;
  font-size: 0.85rem;
`;

const ForumStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const ForumStat = styled.div`
  color: #64748b;
  font-size: 0.85rem;
`;

const ForumStatNumber = styled.span`
  color: #0f172a;
  font-weight: 600;
`;

const RecentSection = styled.div`
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

const TopicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopicItem = styled.div`
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e2e8f0;
  }
`;

const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const TopicTitle = styled.h4`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const TopicMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.85rem;
`;

const TopicAuthor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopicAuthorAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
`;

const Foros: React.FC = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isTeacher = user?.role === 'teacher';

  const forums = [
    {
      id: 1,
      title: 'Programación Avanzada',
      subtitle: 'Discusiones sobre React, TypeScript y desarrollo web',
      icon: '💻',
      topics: 156,
      posts: 892,
    },
    {
      id: 2,
      title: 'Bases de Datos',
      subtitle: 'SQL, NoSQL y diseño de bases de datos',
      icon: '🗄️',
      topics: 89,
      posts: 456,
    },
    {
      id: 3,
      title: 'Estructuras de Datos',
      subtitle: 'Algoritmos, estructuras y complejidad',
      icon: '🔢',
      topics: 112,
      posts: 678,
    },
    {
      id: 4,
      title: 'Robótica',
      subtitle: 'Electrónica, automatización y control',
      icon: '🤖',
      topics: 67,
      posts: 345,
    },
  ];

  const recentTopics = [
    {
      id: 1,
      title: '¿Cómo optimizar el renderizado en React?',
      author: 'Juan Pérez',
      initials: 'JP',
      forum: 'Programación Avanzada',
      replies: 12,
      views: 234,
      time: 'Hace 2 horas',
    },
    {
      id: 2,
      title: 'Duda sobre foreign keys en MySQL',
      author: 'María García',
      initials: 'MG',
      forum: 'Bases de Datos',
      replies: 8,
      views: 156,
      time: 'Hace 4 horas',
    },
    {
      id: 3,
      title: 'Implementación de Merge Sort en TypeScript',
      author: 'Luis López',
      initials: 'LL',
      forum: 'Estructuras de Datos',
      replies: 15,
      views: 289,
      time: 'Hace 6 horas',
    },
    {
      id: 4,
      title: 'Control de motores con Arduino',
      author: 'Carlos Ruiz',
      initials: 'CR',
      forum: 'Robótica',
      replies: 20,
      views: 412,
      time: 'Hace 1 día',
    },
  ];

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Foros de Discusión</PageTitle>
          <PageSubtitle>Participa en conversaciones académicas con tus compañeros</PageSubtitle>
        </div>
        {isTeacher && (
          <HeaderActions>
            <AddButton onClick={() => setIsModalOpen(true)}>+ Crear Foro</AddButton>
          </HeaderActions>
        )}
      </PageHeader>

      <ForumsGrid>
        {forums.map((forum) => (
          <ForumCard key={forum.id}>
            <ForumHeader>
              <ForumIcon>{forum.icon}</ForumIcon>
              <ForumInfo>
                <ForumTitle>{forum.title}</ForumTitle>
                <ForumSubtitle>{forum.subtitle}</ForumSubtitle>
              </ForumInfo>
            </ForumHeader>
            <ForumStats>
              <ForumStat>
                <ForumStatNumber>{forum.topics}</ForumStatNumber> temas
              </ForumStat>
              <ForumStat>
                <ForumStatNumber>{forum.posts}</ForumStatNumber> respuestas
              </ForumStat>
            </ForumStats>
          </ForumCard>
        ))}
      </ForumsGrid>

      <SectionTitle>Discusiones Recientes</SectionTitle>
      <RecentSection>
        <TopicList>
          {recentTopics.map((topic) => (
            <TopicItem key={topic.id}>
              <TopicHeader>
                <TopicTitle>{topic.title}</TopicTitle>
                <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{topic.time}</span>
              </TopicHeader>
              <TopicMeta>
                <TopicAuthor>
                  <TopicAuthorAvatar>{topic.initials}</TopicAuthorAvatar>
                  {topic.author}
                </TopicAuthor>
                <span>•</span>
                <span>{topic.forum}</span>
                <span>•</span>
                <span>{topic.replies} respuestas</span>
                <span>•</span>
                <span>{topic.views} vistas</span>
              </TopicMeta>
            </TopicItem>
          ))}
        </TopicList>
      </RecentSection>

      <ForumForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Foros;
