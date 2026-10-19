import styled from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import CalendarEventForm from '../components/CalendarEventForm';

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

const CalendarHeader = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalendarTitle = styled.h2`
  color: #0f172a;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CalendarNav = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  padding: 0.5rem 1rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #e2e8f0;
  border: 2px solid #000;
  border-radius: 8px;
  overflow: hidden;
`;

const CalendarDayHeader = styled.div`
  background: #0f172a;
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
`;

const CalendarDay = styled.div`
  background: white;
  min-height: 100px;
  padding: 0.5rem;
  transition: all 0.2s;
`;

const DayNumber = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const DayNumberToday = styled.div`
  background: #3b82f6;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Event = styled.div`
  background: #dbeafe;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid #10b981;

  &:hover {
    background: #10b981;
    color: white;
  }
`;

const EventExam = styled(Event)`
  background: #fecaca;
  border-left-color: #ef4444;

  &:hover {
    background: #ef4444;
  }
`;

const EventAssignment = styled(Event)`
  background: #fef3c7;
  border-left-color: #f59e0b;

  &:hover {
    background: #f59e0b;
  }
`;

const EventClass = styled(Event)`
  background: #dbeafe;
  border-left-color: #10b981;

  &:hover {
    background: #10b981;
  }
`;

const UpcomingSection = styled.div`
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

const UpcomingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UpcomingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const UpcomingDate = styled.div`
  background: #0f172a;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  min-width: 70px;
`;

const UpcomingInfo = styled.div`
  flex: 1;
`;

const UpcomingInfoTitle = styled.h4`
  color: #0f172a;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const UpcomingInfoTime = styled.p`
  color: #64748b;
  font-size: 0.85rem;
`;

const UpcomingType = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Calendario: React.FC = () => {
  const { user } = useAuth();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isTeacher = user?.role === 'teacher';

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const events = [
    { day: 15, title: 'Examen Final - Programación', type: 'exam' },
    { day: 18, title: 'Sesión en Vivo - Estructuras', type: 'class' },
    { day: 20, title: 'Entrega Proyecto BD', type: 'assignment' },
    { day: 22, title: 'Tutoría - Programación', type: 'class' },
  ];

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events.filter(e => e.day === day);
      const isToday = day === new Date().getDate() && 
                       currentMonth === new Date().getMonth() && 
                       currentYear === new Date().getFullYear();

      days.push(
        <CalendarDay key={day}>
          {isToday ? (
            <DayNumberToday>{day}</DayNumberToday>
          ) : (
            <DayNumber>{day}</DayNumber>
          )}
          {dayEvents.map((event, index) => (
            event.type === 'exam' ? (
              <EventExam key={index}>{event.title}</EventExam>
            ) : event.type === 'assignment' ? (
              <EventAssignment key={index}>{event.title}</EventAssignment>
            ) : (
              <EventClass key={index}>{event.title}</EventClass>
            )
          ))}
        </CalendarDay>
      );
    }

    return days;
  };

  const upcoming = [
    { day: 15, month: 'OCT', title: 'Examen Final - Programación Avanzada', time: '14:00 - 16:00 hrs', type: 'exam' },
    { day: 18, month: 'OCT', title: 'Sesión en Vivo - Estructuras de Datos', time: '10:00 - 11:30 hrs', type: 'class' },
    { day: 20, month: 'OCT', title: 'Entrega de Proyecto - Bases de Datos', time: '23:59 hrs', type: 'assignment' },
  ];

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Calendario Académico</PageTitle>
          <PageSubtitle>Organiza tus clases, exámenes y entregas</PageSubtitle>
        </div>
        {isTeacher && (
          <HeaderActions>
            <AddButton onClick={() => setIsModalOpen(true)}>+ Agregar Evento</AddButton>
          </HeaderActions>
        )}
      </PageHeader>

      <CalendarHeader>
        <CalendarTitle>{monthNames[currentMonth]} {currentYear}</CalendarTitle>
        <CalendarNav>
          <NavButton onClick={prevMonth}>← Anterior</NavButton>
          <NavButton onClick={nextMonth}>Siguiente →</NavButton>
        </CalendarNav>
      </CalendarHeader>

      <CalendarGrid>
        {dayNames.map((day) => (
          <CalendarDayHeader key={day}>{day}</CalendarDayHeader>
        ))}
        {renderCalendar()}
      </CalendarGrid>

      <SectionTitle>Próximos Eventos</SectionTitle>
      <UpcomingSection>
        <UpcomingList>
          {upcoming.map((item, index) => (
            <UpcomingItem key={index}>
              <UpcomingDate>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.day}</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>{item.month}</div>
              </UpcomingDate>
              <UpcomingInfo>
                <UpcomingInfoTitle>{item.title}</UpcomingInfoTitle>
                <UpcomingInfoTime>{item.time}</UpcomingInfoTime>
              </UpcomingInfo>
              {item.type === 'exam' && <UpcomingType style={{ background: '#ef4444', color: 'white' }}>Examen</UpcomingType>}
              {item.type === 'class' && <UpcomingType style={{ background: '#10b981', color: 'white' }}>Clase</UpcomingType>}
              {item.type === 'assignment' && <UpcomingType style={{ background: '#f59e0b', color: 'white' }}>Tarea</UpcomingType>}
            </UpcomingItem>
          ))}
        </UpcomingList>
      </UpcomingSection>

      <CalendarEventForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Calendario;
