import Modal from './Modal';
import { FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormButton, FormRow } from './FormStyles';

const SessionForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nueva Sesión">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Título de la Sesión</FormLabel>
          <FormInput type="text" placeholder="Ej: Introducción a React" required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Curso</FormLabel>
          <FormSelect required>
            <option value="">Selecciona un curso</option>
            <option value="ing204">Programación Avanzada (ING-204)</option>
            <option value="ing301">Bases de Datos (ING-301)</option>
            <option value="ing205">Estructuras de Datos (ING-205)</option>
          </FormSelect>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <FormLabel>Fecha</FormLabel>
            <FormInput type="date" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Hora Inicio</FormLabel>
            <FormInput type="time" required />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel>Duración (minutos)</FormLabel>
          <FormInput type="number" placeholder="90" defaultValue={90} required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Tipo de Sesión</FormLabel>
          <FormSelect required>
            <option value="class">Clase Regular</option>
            <option value="tutorial">Tutoría</option>
            <option value="exam">Examen</option>
            <option value="review">Repaso</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Descripción</FormLabel>
          <FormTextarea placeholder="Describe el contenido de la sesión..." />
        </FormGroup>

        <FormGroup>
          <FormLabel>Enlace de la Sala (Zoom/Meet)</FormLabel>
          <FormInput type="url" placeholder="https://zoom.us/j/..." />
        </FormGroup>

        <FormButton type="submit">Crear Sesión</FormButton>
      </form>
    </Modal>
  );
};

export default SessionForm;
