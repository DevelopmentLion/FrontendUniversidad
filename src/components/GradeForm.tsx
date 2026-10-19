import Modal from './Modal';
import { FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormButton, FormRow } from './FormStyles';

const GradeForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Registrar Calificación">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Estudiante</FormLabel>
          <FormSelect required>
            <option value="">Selecciona un estudiante</option>
            <option value="1">María González</option>
            <option value="2">Carlos Rodríguez</option>
            <option value="3">Ana Martínez</option>
            <option value="4">Pedro Sánchez</option>
            <option value="5">Laura López</option>
          </FormSelect>
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

        <FormGroup>
          <FormLabel>Tipo de Evaluación</FormLabel>
          <FormSelect required>
            <option value="">Selecciona el tipo</option>
            <option value="exam">Examen Parcial</option>
            <option value="final">Examen Final</option>
            <option value="assignment">Tarea</option>
            <option value="project">Proyecto</option>
            <option value="lab">Laboratorio</option>
            <option value="participation">Participación</option>
            <option value="quiz">Quiz</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Nombre de la Evaluación</FormLabel>
          <FormInput type="text" placeholder="Ej: Proyecto Final" required />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <FormLabel>Calificación (0-10)</FormLabel>
            <FormInput type="number" min="0" max="10" step="0.1" placeholder="8.5" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Ponderación (%)</FormLabel>
            <FormInput type="number" min="0" max="100" placeholder="20" required />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel>Fecha de Evaluación</FormLabel>
          <FormInput type="date" required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Comentarios / Retroalimentación</FormLabel>
          <FormTextarea placeholder="Agrega comentarios sobre el desempeño del estudiante..." />
        </FormGroup>

        <FormButton type="submit">Registrar Calificación</FormButton>
      </form>
    </Modal>
  );
};

export default GradeForm;
