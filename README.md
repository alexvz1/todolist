# Todo List
Todo list with React, Express, MongoDB


## Para ejecutar la aplicación Backend

Moverse al directorio backend

### `cd backend`

Descargar paquetes y dependencias:

### `npm install`

Ejecutar la aplicación Backend en modo desarrollo .<br />
Open [http://localhost:5001](http://localhost:5001) 

### `npm run dev`

## Para ejecutar la aplicación Frontend

Moverse al directorio backend

### `cd frontend`´

Descargar paquetes y dependencias:

### `npm install`

Ejecutar la aplicación Frontend en modo desarrollo.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run start`

** Importante tener servidor Mongo DB corriendo.<br />
### MongoDB 4.2.3 Community

** HOST
### localhost:27017

## Estructura Modelo
<div class="highlight highlight-source-shell">
  <pre>
    {
      title: String, 
      description: String, 
      dateAdded: Date,
      status: Boolean
    }
  </pre>
</div>
