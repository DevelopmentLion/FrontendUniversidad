import styled from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const ProfileHeader = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const BackButton = styled.a`
  background: #0f172a;
  color: white;
  border: 2px solid #0f172a;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
    border-color: #1e293b;
    transform: translateX(-2px);
  }
`;

const ProfileTitle = styled.h1`
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ProfileSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
  text-align: center;
`;

const ProfileAvatarLarge = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  border: 4px solid #fbbf24;
  position: relative;
`;

const AvatarUploadBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  background: #0f172a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  border: 3px solid white;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
    transform: scale(1.1);
  }
`;

const ProfileName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const ProfileEmail = styled.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ProfileStat = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const ProfileStatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const ProfileStatLabel = styled.div`
  font-size: 0.8rem;
  color: #64748b;
`;

const ProfileJoined = styled.div`
  color: #64748b;
  font-size: 0.85rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const FormSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const FormSectionTitle = styled.h2`
  color: #0f172a;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  color: #374151;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
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

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.875rem 1rem;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
`;

const Button = styled.button`
  padding: 0.875rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  font-size: 0.95rem;
`;

const ButtonPrimary = styled(Button)`
  background: #0f172a;
  color: white;

  &:hover {
    background: #1e293b;
    transform: translateY(-1px);
  }
`;

const ButtonSecondary = styled(Button)`
  background: #e2e8f0;
  color: #0f172a;

  &:hover {
    background: #cbd5e1;
  }
`;

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    address: user?.address || '',
    bio: user?.bio || '',
    language: user?.language || 'es',
    timezone: user?.timezone || 'America/Mexico_City',
  });

  const initials = `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    alert('Perfil actualizado correctamente');
  };

  const handleCancel = () => {
    if (confirm('¿Estás seguro de que deseas cancelar los cambios?')) {
      location.reload();
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <BackButton href="/dashboard">
          ← Regresar al Dashboard
        </BackButton>
        <ProfileTitle>Mi Perfil</ProfileTitle>
        <ProfileSubtitle>Administra tu información personal y configuración de cuenta</ProfileSubtitle>
      </ProfileHeader>

      <ProfileContent>
        <ProfileCard>
          <ProfileAvatarLarge>
            {initials}
            <AvatarUploadBtn title="Cambiar foto">📷</AvatarUploadBtn>
          </ProfileAvatarLarge>
          <ProfileName>{formData.firstName} {formData.lastName}</ProfileName>
          <ProfileEmail>{formData.email}</ProfileEmail>
          
          <ProfileStats>
            <ProfileStat>
              <ProfileStatNumber>{user?.courses || 7}</ProfileStatNumber>
              <ProfileStatLabel>Cursos</ProfileStatLabel>
            </ProfileStat>
            <ProfileStat>
              <ProfileStatNumber>{user?.average || 8.5}</ProfileStatNumber>
              <ProfileStatLabel>Promedio</ProfileStatLabel>
            </ProfileStat>
          </ProfileStats>
          
          <ProfileJoined>
            Miembro desde: {user?.joinedDate || 'Enero 2024'}
          </ProfileJoined>
        </ProfileCard>

        <FormSection>
          <FormSectionTitle>Información Personal</FormSectionTitle>
          <form onSubmit={handleSave}>
            <FormRow>
              <FormGroup>
                <FormLabel>Nombre</FormLabel>
                <FormInput
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Apellido</FormLabel>
                <FormInput
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <FormLabel>Teléfono</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <FormInput
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>Dirección</FormLabel>
              <FormInput
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Biografía</FormLabel>
              <FormTextarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Cuéntanos sobre ti..."
              />
            </FormGroup>

            <FormSectionTitle>Configuración de Cuenta</FormSectionTitle>
            <FormGroup>
              <FormLabel>Idioma</FormLabel>
              <FormSelect
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>Zona Horaria</FormLabel>
              <FormSelect
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
              >
                <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
                <option value="America/New_York">Nueva York (GMT-5)</option>
                <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
              </FormSelect>
            </FormGroup>

            <FormActions>
              <ButtonSecondary type="button" onClick={handleCancel}>Cancelar</ButtonSecondary>
              <ButtonPrimary type="submit">Guardar Cambios</ButtonPrimary>
            </FormActions>
          </form>
        </FormSection>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
