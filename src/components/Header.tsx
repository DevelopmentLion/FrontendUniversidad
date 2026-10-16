import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: #0f172a;
  color: white;
  padding: 1.25rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-bottom: 1px solid #e2e8f0;
`;

const HeaderInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  font-weight: 600;
  font-size: 1rem;
`;

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserInfoClickable = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
`;

const UserDropdown = styled.div<{ active: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  border: 2px solid #000;
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1001;

  ${props => props.active && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`;

const DropdownHeader = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 1.5rem;
  border-radius: 10px 10px 0 0;
  color: white;
  text-align: center;
`;

const DropdownAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
  border: 3px solid rgba(255,255,255,0.3);
`;

const DropdownName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const DropdownEmail = styled.div`
  font-size: 0.75rem;
  opacity: 0.8;
`;

const DropdownStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;

const DropdownStat = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 0.5rem;
  border-radius: 6px;
`;

const DropdownStatNumber = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const DropdownStatLabel = styled.div`
  font-size: 0.65rem;
  opacity: 0.8;
`;

const DropdownBody = styled.div`
  padding: 1rem;
`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #475569;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #f8fafc;
    color: #0f172a;
  }
`;

const DropdownFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #dc2626;
  }
`;

interface HeaderProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    courses: number;
    average: number;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const navigate = useNavigate();
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userProfile');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo onClick={() => navigate('/dashboard')}>
          <LogoIcon>U</LogoIcon>
          <span>Universidad</span>
        </Logo>
        
        <UserMenuContainer>
          <UserInfoClickable onClick={() => setDropdownActive(!dropdownActive)}>
            <span>{user.firstName} {user.lastName}</span>
            <UserAvatar>{initials}</UserAvatar>
          </UserInfoClickable>
          
          <UserDropdown active={dropdownActive}>
            <DropdownHeader>
              <DropdownAvatar>{initials}</DropdownAvatar>
              <DropdownName>{user.firstName} {user.lastName}</DropdownName>
              <DropdownEmail>{user.email}</DropdownEmail>
              <DropdownStats>
                <DropdownStat>
                  <DropdownStatNumber>{user.courses}</DropdownStatNumber>
                  <DropdownStatLabel>Cursos</DropdownStatLabel>
                </DropdownStat>
                <DropdownStat>
                  <DropdownStatNumber>{user.average}</DropdownStatNumber>
                  <DropdownStatLabel>Promedio</DropdownStatLabel>
                </DropdownStat>
              </DropdownStats>
            </DropdownHeader>
            <DropdownBody>
              <DropdownItem onClick={() => navigate('/profile')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Mi Perfil
              </DropdownItem>
              <DropdownItem>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Configuración
              </DropdownItem>
              <DropdownItem>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Notificaciones
              </DropdownItem>
              <DropdownItem>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Mensajes
              </DropdownItem>
            </DropdownBody>
            <DropdownFooter>
              <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
            </DropdownFooter>
          </UserDropdown>
        </UserMenuContainer>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
