##Proyecto Docker - Primer Contacto

Este proyecto contiene un sistema básico con:

* Backend (FastAPI)
* Base de datos (PostgreSQL)
* Frontend (HTML + JS)
* Orquestación con Docker Compose

##Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/mateyi/lab-software-2026-03-10-docker-primer-contacto-mateyi.git

2. Entrar a la carpeta:

cd lab-software-2026-03-10-docker-primer-contacto-mateyi

3. Levantar los contenedores:

docker compose up --build
4. apagarlo
docker compose down

##Accesos

* Frontend: http://localhost
* Backend: http://localhost:8000

## Funcionalidades

* Crear items
* Listar items
* Persistencia en base de datos PostgreSQL

## Tecnologías usadas

* FastAPI
* PostgreSQL
* Docker
* Nginx


