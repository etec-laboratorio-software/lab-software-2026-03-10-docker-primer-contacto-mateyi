// Script de inicialización de MongoDB para Docker
// Crea la base de datos, colecciones y carga datos de ejemplo

db = db.getSiblingDB('concesionaria');

// Crear colecciones
db.createCollection('vehiculos');
db.createCollection('usuarios');
db.createCollection('mensajes');
db.createCollection('favoritos');
db.createCollection('turnos');
db.createCollection('alertas');
db.createCollection('cotizaciones');

// Crear índices
db.vehiculos.createIndex({ modelo: 1 });
db.usuarios.createIndex({ username: 1 }, { unique: true });
db.usuarios.createIndex({ email: 1 }, { unique: true });

// Insertar datos de ejemplo - Vehículos
db.vehiculos.insertMany([
  {
    modelo: "Fiat Cronos",
    precio: 15000000,
    anio: 2024,
    descripcion: "Sedán moderno con tecnología avanzada y confort.",
    imagen: "/static/img/fiat-cronos.png",
    stock: 5,
    colores: [
      {
        nombre: "Rojo",
        codigo: "#DC3545",
        imagen: "/static/img/Cronos_MY26_galeria2.png"
      },
      {
        nombre: "Blanco",
        codigo: "#FFFFFF",
        imagen: "/static/img/Cronos_MY26_galeria7.png"
      },
      {
        nombre: "Negro",
        codigo: "#000000",
        imagen: "/static/img/Cronos_MY26_galeria8.png"
      }
    ],
    especificaciones: {
      motor: "1.8L 16v E.torQ",
      potencia: "130 CV",
      transmision: "Manual 5 velocidades",
      combustible: "Nafta",
      capacidad: "5 personas",
      baul: "525 litros"
    }
  },
  {
    modelo: "Fiat Argo",
    precio: 12000000,
    anio: 2024,
    descripcion: "Auto compacto y eficiente, perfecto para la ciudad.",
    imagen: "/static/img/fiat-argo.png",
    stock: 8,
    especificaciones: {
      motor: "1.3L 8v Firefly",
      potencia: "99 CV",
      transmision: "Manual 5 velocidades",
      combustible: "Nafta",
      capacidad: "5 personas",
      baul: "300 litros"
    }
  },
  {
    modelo: "Fiat Pulse",
    precio: 32000000,
    anio: 2024,
    descripcion: "SUV compacta moderna con diseño innovador y tecnología avanzada. Perfecta para la ciudad y aventuras.",
    imagen: "/static/img/fiat-pulse.png",
    stock: 3,
    especificaciones: {
      motor: "1.0L Turbo 200",
      potencia: "130 CV",
      transmision: "Automática CVT",
      combustible: "Nafta",
      capacidad: "5 personas",
      baul: "400 litros"
    }
  },
  {
    modelo: "Fiat Toro",
    precio: 23000000,
    anio: 2024,
    descripcion: "Pickup robusta y versátil. Potencia, confort y capacidad de carga para trabajo y aventura.",
    imagen: "/static/img/fiat-toro.png",
    stock: 4,
    especificaciones: {
      motor: "2.0L 16v Turbo Diesel",
      potencia: "170 CV",
      transmision: "Automática 9 velocidades",
      combustible: "Diesel",
      capacidad: "5 personas",
      carga: "1000 kg"
    }
  },
  {
    modelo: "Fiat 500",
    precio: 18000000,
    anio: 2024,
    descripcion: "Ícono italiano de estilo y elegancia. Compacto, urbano y con personalidad única para la ciudad.",
    imagen: "/static/img/fiat-500.png",
    stock: 6,
    especificaciones: {
      motor: "1.2L 8v Fire",
      potencia: "69 CV",
      transmision: "Manual 5 velocidades",
      combustible: "Nafta",
      capacidad: "4 personas",
      baul: "185 litros"
    }
  }
]);

// Insertar usuario administrador
// Contraseña: admin123
db.usuarios.insertOne({
  username: "admin",
  password: "$2b$10$rZ5ZkZ5ZkZ5ZkZ5ZkZ5ZkuYqJ5qJ5qJ5qJ5qJ5qJ5qJ5qJ5qJ5qJ5qJ",
  email: "admin@gimenez.com",
  role: "admin",
  createdAt: new Date()
});

// Usuario de prueba
db.usuarios.insertOne({
  username: "santi",
  email: "santi@gmail.com",
  password: "$2a$10$3nj.RdpfYyGxCM7fDWFvEeqeKsj5mqdUtBFaXs008ZXX2bkseYoai",
  role: "usuario",
  createdAt: new Date()
});

print("✅ Base de datos 'concesionaria' inicializada correctamente");
print("✅ Colecciones creadas: vehiculos, usuarios, mensajes, favoritos, turnos, alertas, cotizaciones");
print("✅ Datos de ejemplo insertados");
print("✅ Usuario admin creado");
print("✅ Usuario santi creado");
print("");
print("⚠️ IMPORTANTE: asegurate de servir /static como carpeta pública en el frontend");
print("");