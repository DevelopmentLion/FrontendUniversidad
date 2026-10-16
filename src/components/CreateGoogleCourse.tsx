import styled from 'styled-components';
import { useState } from 'react';
import { useGoogleClassroom } from '../hooks/useGoogleClassroom';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const Title = styled.h2`
  color: #0f172a;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const AuthSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const AuthButton = styled.button`
  padding: 0.875rem 2rem;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #3367d6;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;

const Status = styled.div<{ authenticated: boolean }>`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  background: ${props => props.authenticated ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.authenticated ? '#166534' : '#991b1b'};
  font-size: 0.9rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 0.875rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  padding: 0.875rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.875rem 2rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background: #dcfce7;
  color: #166534;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CreateGoogleCourse: React.FC = () => {
  const { loading, error, oauthState, initiateAuth, createCourse } = useGoogleClassroom();
  const [courseData, setCourseData] = useState({
    name: '',
    section: '',
    descriptionHeading: '',
    description: '',
    courseState: 'ACTIVE' as const,
  });
  const [success, setSuccess] = useState(false);
  const [createdCourse, setCreatedCourse] = useState<any>(null);

  const handleAuth = async () => {
    try {
      await initiateAuth();
      setSuccess(false);
    } catch (err) {
      console.error('Auth error:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setCreatedCourse(null);

    try {
      const course = await createCourse(courseData);
      setCreatedCourse(course);
      setSuccess(true);
      setCourseData({
        name: '',
        section: '',
        descriptionHeading: '',
        description: '',
        courseState: 'ACTIVE',
      });
    } catch (err) {
      console.error('Create course error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>Crear Curso en Google Classroom</Title>

      <AuthSection>
        <AuthButton onClick={handleAuth} disabled={loading}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {loading ? 'Autenticando...' : 'Autenticar con Google'}
        </AuthButton>
        <Status authenticated={!!oauthState}>
          {oauthState ? '✓ Autenticado con Google Classroom' : '✗ No autenticado'}
        </Status>
      </AuthSection>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {success && createdCourse && (
        <SuccessMessage>
          Curso creado exitosamente en Google Classroom!<br />
          ID: {createdCourse.id}<br />
          Nombre: {createdCourse.name}
        </SuccessMessage>
      )}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre del curso *</Label>
          <Input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            required
            disabled={!oauthState || loading}
          />
        </FormGroup>

        <FormGroup>
          <Label>Sección</Label>
          <Input
            type="text"
            name="section"
            value={courseData.section}
            onChange={handleChange}
            disabled={!oauthState || loading}
          />
        </FormGroup>

        <FormGroup>
          <Label>Título de descripción</Label>
          <Input
            type="text"
            name="descriptionHeading"
            value={courseData.descriptionHeading}
            onChange={handleChange}
            disabled={!oauthState || loading}
          />
        </FormGroup>

        <FormGroup>
          <Label>Descripción</Label>
          <Textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            disabled={!oauthState || loading}
          />
        </FormGroup>

        <FormGroup>
          <Label>Estado del curso</Label>
          <Select
            name="courseState"
            value={courseData.courseState}
            onChange={handleChange}
            disabled={!oauthState || loading}
          >
            <option value="ACTIVE">Activo</option>
            <option value="ARCHIVED">Archivado</option>
            <option value="PROVISIONED">Provisionado</option>
            <option value="DECLINED">Rechazado</option>
          </Select>
        </FormGroup>

        <SubmitButton type="submit" disabled={!oauthState || loading}>
          {loading ? 'Creando curso...' : 'Crear Curso en Google Classroom'}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default CreateGoogleCourse;
