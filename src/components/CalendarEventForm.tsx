import Modal from './Modal';
import { FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormButton, FormRow } from './FormStyles';

const CalendarEventForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agregar Evento al Calendario">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Título del Evento</FormLabel>
          <FormInput type="text" placeholder="Ej: Examen Final - Programación" required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Curso Relacionado</FormLabel>
          <FormSelect required>
            <option value="">Selecciona un curso</option>
            <option value="ing204">Programación Avanzada (ING-204)</option>
            <option value="ing301">Bases de Datos (ING-301)</option>
            <option value="ing205">Estructuras de Datos (ING-205)</option>
            <option value="all">Todos los cursos</option>
          </FormSelect>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <FormLabel>Fecha</FormLabel>
            <FormInput type="date" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Hora</FormLabel>
            <FormInput type="time" required />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel>Tipo de Evento</FormLabel>
          <FormSelect required>
            <option value="class">Clase</option>
            <option value="exam">Examen</option>
            <option value="assignment">Entrega de Tarea</option>
            <option value="tutorial">Tutoría</option>
            <option value="meeting">Reunión</option>
            <option value="other">Otro</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Descripción</FormLabel>
          <FormTextarea placeholder="Describe los detalles del evento..." />
        </FormGroup>

        <FormGroup>
          <FormLabel>Ubicación / Enlace</FormLabel>
          <FormInput type="text" placeholder="Ej: Sala Virtual 1 o enlace de Zoom" />
        </FormGroup>

        <FormButton type="submit">Agregar Evento</FormButton>
      </form>
    </Modal>
  );
};

export default CalendarEventForm;
