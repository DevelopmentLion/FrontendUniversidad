import Modal from './Modal';
import { FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormButton, FormRow } from './FormStyles';

const ClassroomForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nueva Aula Virtual">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombre del Curso</FormLabel>
          <FormInput type="text" placeholder="Ej: Programación Avanzada" required />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <FormLabel>Código del Curso</FormLabel>
            <FormInput type="text" placeholder="Ej: ING-204" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Créditos</FormLabel>
            <FormInput type="number" placeholder="8" defaultValue={8} required />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel>Semestre</FormLabel>
          <FormSelect required>
            <option value="">Selecciona el semestre</option>
            <option value="1">Semestre 1</option>
            <option value="2">Semestre 2</option>
            <option value="3">Semestre 3</option>
            <option value="4">Semestre 4</option>
            <option value="5">Semestre 5</option>
            <option value="6">Semestre 6</option>
            <option value="7">Semestre 7</option>
            <option value="8">Semestre 8</option>
          </FormSelect>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <FormLabel>Días</FormLabel>
            <FormSelect required>
              <option value="">Selecciona los días</option>
              <option value="lun">Lunes</option>
              <option value="mar">Martes</option>
              <option value="mie">Miércoles</option>
              <option value="jue">Jueves</option>
              <option value="vie">Viernes</option>
              <option value="sab">Sábado</option>
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel>Horario</FormLabel>
            <FormInput type="text" placeholder="Ej: 14:00 - 16:00" required />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel>Sala Virtual</FormLabel>
          <FormSelect required>
            <option value="">Selecciona una sala</option>
            <option value="virtual1">Virtual 1</option>
            <option value="virtual2">Virtual 2</option>
            <option value="virtual3">Virtual 3</option>
            <option value="virtual4">Virtual 4</option>
            <option value="virtual5">Virtual 5</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Descripción del Curso</FormLabel>
          <FormTextarea placeholder="Describe el contenido y objetivos del curso..." />
        </FormGroup>

        <FormButton type="submit">Crear Aula Virtual</FormButton>
      </form>
    </Modal>
  );
};

export default ClassroomForm;
