import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
`;

const MainContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  flex: 1;
  width: 100%;
`;

const Content = styled.main`
  flex: 1;
  min-width: 0;
`;

interface LayoutProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    courses: number;
    average: number;
  };
  sidebarItems: Array<{
    path: string;
    label: string;
  }>;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ user, sidebarItems, children }) => {
  return (
    <LayoutContainer>
      <Header user={user} />
      <MainContainer>
        <Sidebar items={sidebarItems} />
        <Content>
          {children || <Outlet />}
        </Content>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
