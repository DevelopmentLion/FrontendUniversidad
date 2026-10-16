import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const SidebarContainer = styled.aside`
  width: 260px;
  min-width: 260px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
`;

const SidebarMenuItem = styled.li`
  margin-bottom: 0.25rem;
`;

const SidebarLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  color: #475569;
  border-radius: 8px;
  transition: all 0.2s;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
  }

  ${props => props.active && `
    background: #0f172a;
    color: white;
  `}
`;

interface SidebarProps {
  items: Array<{
    path: string;
    label: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarLink to={item.path} active={location.pathname === item.path}>
              {item.label}
            </SidebarLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
