
# API NODE JS - Prueba técnica NTT DATA

  

API REST en **Node.js + TypeScript** con **Express**, validación con **Zod** y manejo de errores con **@hapi/boom**.

Incluye **Docker** y **Jest** para testing.

Esta API es una prueba técnica para consultar la información de un cliente usando datos mockeados.

  

---

  

## 🚀 Tecnologías usadas

- Node.js 22.18.0

- TypeScript

- Express.js

- Zod (validación)

- @hapi/boom (manejo de errores HTTP)

- Jest + Supertest (testing)

- Docker & Docker Compose

  

---

  

## 📂 Estructura principal

```

src/

app.ts # Configuración principal de Express

server.ts # Punto de entrada del servidor

routes/ # Definición de rutas

controllers/ # Controladores de endpoints

services/ # Lógica de negocio (Singleton)

validators/ # Validaciones con Zod

data/ # Datos mockeados

middlewares/ # Manejo global de errores

```

---

  

## ⚙️ Instalación local

  

### 1️⃣ Clonar repositorio

```bash

git  clone  https://github.com/juanegomez/node_js_api_ntt_data_job_test.git

cd  node_js_api_ntt_data_job_test

```

  

### 2️⃣ Instalar versión correcta de Node.js (con nvm)

```bash

nvm  install  22.18.0

nvm  use  22.18.0

```

  

### 3️⃣ Instalar dependencias

```bash

npm  install

```

  

### 4️⃣ Ejecutar en modo desarrollo

```bash

npm  run  dev

```

Servidor disponible en:

`http://localhost:8090`

  

---

  

## 🐳 Ejecución con Docker

  

### Usando Docker

```bash

docker  build  -t  cliente-api-ts  .

docker  run  -p  8090:8090  cliente-api-ts

```

  

### Usando Docker Compose

```bash

docker  compose  up  --build

```

  

---

  

## 🔍 Probar el endpoint

  

### URL

```

GET http://localhost:8090/api/cliente/C/23445322

```

  

### Respuesta esperada (200 OK)

```json

{

"primerNombre": "Juan",

"segundoNombre": "Esteban",

"primerApellido": "Gomez",

"segundoApellido": "Martínez",

"telefono": "3001234567",

"direccion": "Calle Falsa 123",

"ciudad": "Medellín"

}

```

---

## 📊 Tabla de códigos HTTP y ejemplos

| Código | Significado              | Ejemplo de Request                                                                 | Ejemplo de Respuesta                                                                                     |
|--------|--------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 200    | OK                       | `/api/cliente?tipoDocumento=C&numeroDocumento=23445322`                            | `{ "primerNombre": "Juan", ... }`                                                                        |
| 400    | Bad Request               | `/api/cliente?tipoDocumento=X&numeroDocumento=123`                                 | `{ "statusCode": 400, "error": "Bad Request", "message": "El tipo de documento debe ser 'C' o 'P'." }`   |
| 404    | Not Found                 | `/api/cliente?tipoDocumento=C&numeroDocumento=99999999`                            | `{ "statusCode": 404, "error": "Not Found", "message": "Cliente no encontrado" }`                        |
| 500    | Internal Server Error     | Forzando un error interno                                                          | `{ "statusCode": 500, "error": "Internal Server Error", "message": "Ocurrió un error inesperado..." }`   |

---

## 🧪 Ejecutar tests

```bash

npm  test

```

Ejecutará las pruebas definidas en `tests/client.test.ts` usando Jest y Supertest.

  

---

  

## 📖 Documentación con Swagger

  

La API cuenta con **Swagger** para probar los endpoints de forma interactiva.

Puedes acceder a la documentación en:

[http://localhost:8090/docs/](http://localhost:8090/docs/)

Desde allí puedes:  
- Consultar el endpoint `/api/cliente`  
- Probar distintos valores de `tipoDocumento` y `numeroDocumento`  
- Ver ejemplos de request y response  
- Visualizar los códigos de estado posibles (200, 400, 404, 500)

---
  

## 📄 Notas

- Puerto por defecto: **8090**.

- Patrón de diseño usado: **Singleton** en `Server` y `ClientService`.

- Datos de cliente **mockeados** en `src/data/client.mock.ts`.