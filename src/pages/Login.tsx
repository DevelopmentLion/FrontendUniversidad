import styled from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 420px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #0f172a;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.5px;
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginTitle = styled.h1`
  color: #0f172a;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const LoginSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
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
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
`;

const ForgotPassword = styled.a`
  color: #3b82f6;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #0f172a;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
    transform: translateY(-1px);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: #9ca3af;
  font-size: 0.85rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
`;

const DividerSpan = styled.span`
  padding: 0 1rem;
`;

const SocialLogin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #64748b;
  font-size: 0.9rem;
`;

const SignupLinkA = styled.a`
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <LogoIcon>U</LogoIcon>
          <LogoText>Universidad</LogoText>
        </Logo>

        <LoginHeader>
          <LoginTitle>Bienvenido de nuevo</LoginTitle>
          <LoginSubtitle>Ingresa tus credenciales para acceder</LoginSubtitle>
        </LoginHeader>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Correo electrónico</FormLabel>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@universidad.edu"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Contraseña</FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••••"
              required
            />
          </FormGroup>

          <RememberForgot>
            <RememberMe>
              <input type="checkbox" />
              <span>Recordarme</span>
            </RememberMe>
            <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
          </RememberForgot>

          <LoginButton type="submit">Iniciar Sesión</LoginButton>
        </form>

        <Divider>
          <DividerSpan>O continúa con</DividerSpan>
        </Divider>

        <SocialLogin>
          <SocialButton>Google</SocialButton>
          <SocialButton>GitHub</SocialButton>
        </SocialLogin>

        <SignupLink>
          ¿No tienes una cuenta? <SignupLinkA>Regístrate</SignupLinkA>
        </SignupLink>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
