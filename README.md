# Giménez Automotores

Aplicación web para una concesionaria FIAT. Permite explorar vehículos, cotizar usados, calcular planes de financiación y gestionar el inventario desde un panel de administración.

---

## Tecnologías

- **Backend:** Node.js + Express + MongoDB
- **Frontend:** HTML, CSS, Bootstrap 5, JavaScript
- **Base de datos:** MongoDB en Docker

---

## Requisitos

- Node.js v16+
- Docker Desktop
- Python 3 (para servir el frontend)

---

## Cómo levantar el proyecto

Necesitás **3 terminales abiertas** al mismo tiempo.

### Terminal 1 — Base de datos
```bash
cd BACKEND
docker-compose up -d
```

### Terminal 2 — Backend
```bash
cd BACKEND
npm install
npm start
```
El servidor corre en `http://localhost:3000`

### Terminal 3 — Frontend
```bash
cd FRONTEND
python -m http.server 8080
```
Abrir en el navegador: `http://localhost:8080`

---

## Credenciales

| Rol | Usuario | Contraseña |
|-----|---------|------------|
| Administrador | `admin` | `admin123` |
| Usuario normal | Registrarse en `/register.html` | - |

---

## Funcionalidades

**Usuario:**
- Ver catálogo y detalle de vehículos
- Cotizar vehículos usados
- Calcular planes de financiación
- Guardar favoritos
- Agendar test drives
- Crear alertas de novedades

**Administrador:**
- Agregar, editar y eliminar vehículos
- Ver y gestionar mensajes de contacto

---
