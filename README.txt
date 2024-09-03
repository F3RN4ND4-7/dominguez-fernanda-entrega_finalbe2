### Proyecto Final Backend 2 (Bolsos de Piel YOYO)

1. **Crear Usuario (user/admin):**  
   POST `localhost:5000/api/auth/register`
   ```json
   {
     "first_name": "user",
     "last_name": "user",
     "email": "user@gmail.com",
     "age": 23,
     "role": "user",
     "password": "1234"
   }
   ```
   ```json
   {
     "first_name": "admin",
     "last_name": "admin",
     "email": "admin@gmail.com",
     "age": 23,
     "role": "admin",
     "password": "1234"
   }
   ```

2. **Crear un Producto (admin):**  
   POST `localhost:5000/api/products`
   ```json
   {
     "name": "Bolso YOYO Clásico",
     "description": "Bolsa de piel de alta calidad, diseño clásico",
     "price": 900,
     "stock": 99,
     "category": "bolsos",
     "image": "imagen_clasico.jpg"
   }
   ```

3. **Crear un Carrito:**  
   POST `localhost:5000/api/carts`

4. **Agregar Productos al Carrito:**  
   POST `localhost:5000/carts/:idCart/products/:idProd`

5. **Finalizar la Compra:**  
   POST `localhost:5000/carts/:idCart/purchase`
   ```json
   {
     "code": "fe85ec73-7c26-446a-b57e-acb06dda7169",
     "purchase_datetime": "2024-08-17T01:48:40.783Z",
     "amount": 500,
     "purchaser": "66bffeee40e9c9729264e6a2",
     "_id": "66c0017840e9c9729264e6f3",
     "__v": 0
   }
   ```

---

### Pre-entrega Proyecto Final (Bolsos de Piel YOYO)

Instala los paquetes necesarios:
```bash
npm i express mongoose jsonwebtoken passport passport-jwt passport-local bcrypt morgan cookie-parser joi uuidv4 express-session nodemailer twilio
npm run dev
```

#### **Rutas API:**

- **Obtener Usuarios:**  
  GET `localhost:5000/api/users`

- **Registrar Usuario:**  
  POST `localhost:5000/api/auth/register`
  ```json
  {
    "first_name": "Prueba1",
    "last_name": "Pruebita1",
    "email": "Prueba1@gmail.com",
    "age": 23,
    "role": "admin",
    "password": "1234"
  }
  ```

- **Login de Usuario:**  
  POST `localhost:5000/api/auth/login`
  ```json
  {
    "email": "Prueba1@gmail.com",
    "password": "1234"
  }
  ```

- **Obtener Usuario Actual:**  
  GET `localhost:5000/api/auth/current`

---

### Entrega Final Primera Parte Backend (Bolsos de Piel YOYO)

#### **Productos:**

- **Crear Producto:**  
  POST `localhost:8080/products`
  ```json
  {
    "name": "Bolso YOYO Moderno",
    "description": "Bolsa de piel con diseño moderno y elegante",
    "price": 1200,
    "thumbnail": "http://imagen_moderno.jpg",
    "code": "YOYO002",
    "stock": 50
  }
  ```

- **Obtener Productos:**  
  GET `localhost:8080/products`

- **Obtener Producto por ID:**  
  GET `localhost:8080/products/:idProd`

- **Actualizar Producto:**  
  PUT `localhost:8080/products/:idProd`
  ```json
  {
    "name": "Bolso YOYO Moderno Actualizado",
    "description": "Bolsa de piel con diseño moderno y elegante, versión actualizada",
    "price": 1100,
    "thumbnail": "http://imagen_moderno_update.jpg",
    "code": "YOYO002",
    "stock": 30
  }
  ```

- **Eliminar Producto:**  
  DELETE `localhost:8080/products/:idProd`

- **Obtener Productos con Filtros, Paginación y Ordenamiento:**  
  GET `localhost:8080/products?category=bolsos&priceMin=500&priceMax=2000&page=1&limit=2&sortBy=price&order=asc`

#### **Carritos:**

- **Crear Carrito:**  
  POST `localhost:8080/carts`
  ```json
  {
    "products": []
  }
  ```

- **Obtener Carritos:**  
  GET `localhost:8080/carts`

- **Obtener Carrito por ID:**  
  GET `localhost:8080/carts/:idCart`

- **Eliminar Carrito:**  
  DELETE `localhost:8080/carts/:idCart`

- **Agregar Producto al Carrito:**  
  POST `localhost:8080/carts/:idCart/products/:idProd`

- **Eliminar Producto del Carrito:**  
  DELETE `localhost:8080/carts/:idCart/products/:idProd`

- **Actualizar Cantidad de Producto en el Carrito:**  
  PUT `localhost:8080/carts/:idCart/products/:idProd`
  ```json
  {
    "quantity": 5
  }
  ```