import styled from 'styled-components';

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

const StatNumber = styled.div<{ color?: string }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.color || '#0f172a'};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #0f172a;
  font-weight: 600;
`;

const PaymentHistory = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
  margin-bottom: 2rem;
`;

const TableHeader = styled.div`
  background: #0f172a;
  color: white;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  font-weight: 600;
`;

const TableRow = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    if (props.status === 'paid') return '#10b981';
    if (props.status === 'pending') return '#f59e0b';
    if (props.status === 'overdue') return '#ef4444';
    return '#64748b';
  }};
  color: white;
`;

const PaymentMethods = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
`;

const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const MethodCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const MethodIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const MethodTitle = styled.h3`
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const MethodDescription = styled.p`
  color: #64748b;
  font-size: 0.85rem;
`;

const AddButton = styled.button`
  background: #0f172a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1.5rem;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const DownloadButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #1d4ed8;
  }
`;

const ActionsCell = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DownloadSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid #000;
  margin-bottom: 2rem;
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DownloadCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const DownloadIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const DownloadTitle = styled.h3`
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DownloadDescription = styled.p`
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const DownloadAction = styled.button`
  background: #0f172a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const AlertBanner = styled.div<{ type: string }>`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  background: ${props => {
    if (props.type === 'warning') return '#fef3c7';
    if (props.type === 'danger') return '#fee2e2';
    return '#dbeafe';
  }};
  border: 1px solid ${props => {
    if (props.type === 'warning') return '#f59e0b';
    if (props.type === 'danger') return '#ef4444';
    return '#3b82f6';
  }};
  color: ${props => {
    if (props.type === 'warning') return '#92400e';
    if (props.type === 'danger') return '#b91c1c';
    return '#1e40af';
  }};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Pagos: React.FC = () => {
  const stats = {
    totalPaid: 45000,
    pending: 8500,
    overdue: 0,
    nextPayment: 8500,
  };

  const payments = [
    {
      id: 1,
      description: 'Colegiatura Septiembre 2024',
      amount: 8500,
      date: '2024-09-15',
      dueDate: '2024-09-30',
      status: 'paid',
      method: 'Tarjeta de Crédito',
    },
    {
      id: 2,
      description: 'Colegiatura Octubre 2024',
      amount: 8500,
      date: '-',
      dueDate: '2024-10-31',
      status: 'pending',
      method: '-',
    },
    {
      id: 3,
      description: 'Colegiatura Agosto 2024',
      amount: 8500,
      date: '2024-08-15',
      dueDate: '2024-08-31',
      status: 'paid',
      method: 'Transferencia Bancaria',
    },
    {
      id: 4,
      description: 'Colegiatura Julio 2024',
      amount: 8500,
      date: '2024-07-15',
      dueDate: '2024-07-31',
      status: 'paid',
      method: 'Tarjeta de Crédito',
    },
    {
      id: 5,
      description: 'Colegiatura Junio 2024',
      amount: 8500,
      date: '2024-06-15',
      dueDate: '2024-06-30',
      status: 'paid',
      method: 'Transferencia Bancaria',
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      icon: '💳',
      title: 'Tarjeta de Crédito',
      description: '**** **** **** 4242',
    },
    {
      id: 2,
      icon: '🏦',
      title: 'Transferencia Bancaria',
      description: 'Cuenta terminada en 1234',
    },
  ];

  const hasPendingPayments = payments.some(p => p.status === 'pending');
  const hasOverduePayments = payments.some(p => p.status === 'overdue');

  return (
    <>
      <PageHeader>
        <PageTitle>Pagos</PageTitle>
        <PageSubtitle>Gestiona tus pagos y consulta tu estado de cuenta</PageSubtitle>
      </PageHeader>

      {hasOverduePayments && (
        <AlertBanner type="danger">
          <span>⚠️</span>
          <div>
            <strong>¡Atención!</strong> Tienes pagos vencidos. Por favor realízalos lo antes posible para evitar recargos.
          </div>
        </AlertBanner>
      )}

      {hasPendingPayments && !hasOverduePayments && (
        <AlertBanner type="warning">
          <span>📋</span>
          <div>
            <strong>Recordatorio:</strong> Tienes pagos pendientes. La fecha límite es el 31 de octubre de 2024.
          </div>
        </AlertBanner>
      )}

      <StatsContainer>
        <StatCard>
          <StatNumber>${stats.totalPaid.toLocaleString()}</StatNumber>
          <StatLabel>Total Pagado</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber color={stats.pending > 0 ? '#f59e0b' : '#10b981'}>${stats.pending.toLocaleString()}</StatNumber>
          <StatLabel>Pendiente</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber color={stats.overdue > 0 ? '#ef4444' : '#10b981'}>${stats.overdue.toLocaleString()}</StatNumber>
          <StatLabel>Vencido</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>${stats.nextPayment.toLocaleString()}</StatNumber>
          <StatLabel>Próximo Pago</StatLabel>
        </StatCard>
      </StatsContainer>

      <SectionTitle>Historial de Pagos</SectionTitle>
      <PaymentHistory>
        <TableHeader>
          <div>Descripción</div>
          <div>Monto</div>
          <div>Fecha de Pago</div>
          <div>Fecha Límite</div>
          <div>Estado</div>
          <div>Acciones</div>
        </TableHeader>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <div>
              <div style={{ fontWeight: 600, color: '#0f172a' }}>{payment.description}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{payment.method}</div>
            </div>
            <div style={{ fontWeight: 600, color: '#0f172a' }}>${payment.amount.toLocaleString()}</div>
            <div>{payment.date}</div>
            <div>{payment.dueDate}</div>
            <StatusBadge status={payment.status}>
              {payment.status === 'paid' ? 'Pagado' : payment.status === 'pending' ? 'Pendiente' : 'Vencido'}
            </StatusBadge>
            <ActionsCell>
              {payment.status === 'paid' && (
                <DownloadButton onClick={() => {}}>
                  📄 Recibo
                </DownloadButton>
              )}
              {payment.status === 'pending' && (
                <DownloadButton onClick={() => {}}>
                  📄 Formato
                </DownloadButton>
              )}
            </ActionsCell>
          </TableRow>
        ))}
      </PaymentHistory>

      <SectionTitle>Formatos de Pago</SectionTitle>
      <DownloadSection>
        <DownloadGrid>
          <DownloadCard>
            <DownloadIcon>📄</DownloadIcon>
            <DownloadTitle>Formato de Pago Mensual</DownloadTitle>
            <DownloadDescription>Formato oficial para realizar pagos de colegiatura</DownloadDescription>
            <DownloadAction>Descargar PDF</DownloadAction>
          </DownloadCard>
          <DownloadCard>
            <DownloadIcon>📋</DownloadIcon>
            <DownloadTitle>Formato de Referencia Bancaria</DownloadTitle>
            <DownloadDescription>Datos bancarios para transferencias SPEI</DownloadDescription>
            <DownloadAction>Descargar PDF</DownloadAction>
          </DownloadCard>
          <DownloadCard>
            <DownloadIcon>🧾</DownloadIcon>
            <DownloadTitle>Historial de Pagos</DownloadTitle>
            <DownloadDescription>Reporte completo de todos tus pagos realizados</DownloadDescription>
            <DownloadAction>Descargar PDF</DownloadAction>
          </DownloadCard>
          <DownloadCard>
            <DownloadIcon>📊</DownloadIcon>
            <DownloadTitle>Estado de Cuenta</DownloadTitle>
            <DownloadDescription>Resumen detallado de tu estado de cuenta actual</DownloadDescription>
            <DownloadAction>Descargar PDF</DownloadAction>
          </DownloadCard>
        </DownloadGrid>
      </DownloadSection>

      <SectionTitle>Métodos de Pago</SectionTitle>
      <PaymentMethods>
        <MethodsGrid>
          {paymentMethods.map((method) => (
            <MethodCard key={method.id}>
              <MethodIcon>{method.icon}</MethodIcon>
              <MethodTitle>{method.title}</MethodTitle>
              <MethodDescription>{method.description}</MethodDescription>
            </MethodCard>
          ))}
          <MethodCard>
            <MethodIcon>➕</MethodIcon>
            <MethodTitle>Agregar Método</MethodTitle>
            <MethodDescription>Configurar un nuevo método de pago</MethodDescription>
          </MethodCard>
        </MethodsGrid>
        <AddButton>Realizar Pago Pendiente</AddButton>
      </PaymentMethods>
    </>
  );
};

export default Pagos;
