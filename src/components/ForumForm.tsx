import Modal from './Modal';
import { FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormButton } from './FormStyles';

const ForumForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nuevo Foro">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombre del Foro</FormLabel>
          <FormInput type="text" placeholder="Ej: Programación Avanzada" required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Curso Relacionado</FormLabel>
          <FormSelect required>
            <option value="">Selecciona un curso</option>
            <option value="ing204">Programación Avanzada (ING-204)</option>
            <option value="ing301">Bases de Datos (ING-301)</option>
            <option value="ing205">Estructuras de Datos (ING-205)</option>
            <option value="rob101">Robótica (ROB-101)</option>
            <option value="mat201">Matemáticas Discretas (MAT-201)</option>
            <option value="general">General</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Descripción</FormLabel>
          <FormTextarea placeholder="Describe el propósito y temas del foro..." required />
        </FormGroup>

        <FormGroup>
          <FormLabel>Icono del Foro</FormLabel>
          <FormSelect required>
            <option value="">Selecciona un icono</option>
            <option value="💻">💻 Computación</option>
            <option value="🗄️">🗄️ Bases de Datos</option>
            <option value="🔢">🔢 Matemáticas</option>
            <option value="🤖">🤖 Robótica</option>
            <option value="📚">📚 General</option>
            <option value="🔬">🔬 Ciencias</option>
            <option value="🎨">🎨 Arte</option>
            <option value="📊">📊 Negocios</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Visibilidad</FormLabel>
          <FormSelect required>
            <option value="public">Público (Todos pueden ver)</option>
            <option value="course">Solo estudiantes del curso</option>
            <option value="private">Privado (Solo miembros)</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Permisos de Publicación</FormLabel>
          <FormSelect required>
            <option value="all">Todos pueden publicar</option>
            <option value="moderated">Moderado (requiere aprobación)</option>
            <option value="teacher">Solo docentes pueden publicar</option>
          </FormSelect>
        </FormGroup>

        <FormButton type="submit">Crear Foro</FormButton>
      </form>
    </Modal>
  );
};

export default ForumForm;
