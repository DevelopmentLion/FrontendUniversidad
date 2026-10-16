# Universidad React + TypeScript

Plataforma de aprendizaje universitario implementada con React, TypeScript y Styled Components.

## 🚀 Características

- **Autenticación**: Sistema de login con localStorage
- **Dashboard**: Vista general del progreso académico
- **Aulas Virtuales**: Acceso a cursos y materias
- **Sesiones en Vivo**: Clases, tutorías y exámenes en tiempo real
- **Calendario**: Organización de eventos académicos
- **Calificaciones**: Visualización de notas y rendimiento
- **Foros**: Discusiones académicas
- **Programas**: Seguimiento de programas de estudio
- **Perfil**: Gestión de información personal

## 📦 Instalación

```bash
cd universidad-react
npm install
```

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS
- **React Router** - Enrutamiento

## 🏃 Ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📂 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── Layout.tsx
├── pages/          # Páginas de la aplicación
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Aulas.tsx
│   ├── Sesiones.tsx
│   ├── Calendario.tsx
│   ├── Calificaciones.tsx
│   ├── Foros.tsx
│   ├── Programas.tsx
│   └── Profile.tsx
├── hooks/          # Custom hooks
│   └── useAuth.ts
├── types/          # Definiciones TypeScript
│   └── index.ts
├── styles/         # Estilos globales
│   └── GlobalStyles.ts
└── App.tsx         # Componente principal
```

## 🔐 Credenciales de Login

Para propósitos de demostración, cualquier email y contraseña funcionan:
- Email: `usuario@ejemplo.com`
- Contraseña: `cualquier contraseña`

## 🎨 Estilos

El proyecto utiliza una paleta de colores institucional/gubernamental:
- Azul oscuro: `#0f172a`
- Azul real: `#3b82f6`
- Dorado: `#fbbf24`
- Blanco: `#ffffff`
- Gris claro: `#f8fafc`

## 📝 Funcionalidades implementadas

### Autenticación
- Login con localStorage
- Logout
- Protección de rutas
- Gestión de perfil de usuario

### Navegación
- Sidebar con enlaces
- Header con menú de usuario
- React Router para navegación

### Componentes
- Cards con efectos hover
- Tablas de calificaciones
- Calendario interactivo
- Foros de discusión
- Formularios de perfil

## 🔧 Build para producción

```bash
npm run build
```

## 📝 Notas

- Este es un proyecto frontend sin backend real
- Los datos se almacenan en localStorage
- No hay persistencia de datos entre sesiones del navegador
- Para producción, se requiere un backend real
