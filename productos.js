/*
  ============================================================
  PRODUCTOS DE JAUME JOIERS
  ============================================================
  Aquí añades, editas o borras productos del catálogo.
  No hace falta tocar HTML ni CSS para nada de esto.

  CÓMO AÑADIR UN PRODUCTO NUEVO:
  1. Copia un bloque entero, desde la { hasta la } (incluida la coma final).
  2. Pégalo justo antes del último ] de este archivo.
  3. Cambia los datos: nombre, categoria, precio e imagen.
  4. Sube la foto del producto a la carpeta imagenes/productos/
     con el MISMO nombre que pongas en "imagen".
  5. Guarda (Commit changes) este archivo y la foto.

  CATEGORÍAS VÁLIDAS (deben escribirse tal cual, en minúsculas):
  "anillos", "collares", "pendientes", "pulseras"

  CÓMO BORRAR UN PRODUCTO:
  Borra el bloque completo, desde su { hasta su } (con la coma).

  IMPORTANTE: cada bloque va separado por una coma ( , ),
  excepto el último de la lista, que no lleva coma al final.
  ============================================================
*/

const PRODUCTOS = [
  {
    "nombre": "Anillo Solitario Luna",
    "categoria": "anillos",
    "precio": "120€",
    "descripcion": "Oro de 18k con circonita central",
    "imagen": "imagenes/productos/anillo-luna.jpg"
  },
  {
    "nombre": "Anillo Trenzado Clásico",
    "categoria": "anillos",
    "precio": "65€",
    "descripcion": "Plata 925 acabado mate",
    "imagen": "imagenes/productos/anillo-trenzado.jpg"
  },
  {
    "nombre": "Collar Hilo de Plata",
    "categoria": "collares",
    "precio": "85€",
    "descripcion": "Plata 925 con colgante artesanal",
    "imagen": "imagenes/productos/collar-hilo-plata.jpg"
  },
  {
    "nombre": "Collar Gargantilla Dorada",
    "categoria": "collares",
    "precio": "95€",
    "descripcion": "Bañado en oro 18k, cadena fina",
    "imagen": "imagenes/productos/collar-gargantilla.jpg"
  },
  {
    "nombre": "Pendientes Gota Rosa",
    "categoria": "pendientes",
    "precio": "55€",
    "descripcion": "Bañado en oro con cuarzo rosa",
    "imagen": "imagenes/productos/pendientes-gota-rosa.jpg"
  },
  {
    "nombre": "Pendientes Aro Clásico",
    "categoria": "pendientes",
    "precio": "40€",
    "descripcion": "Plata 925, varios tamaños",
    "imagen": "imagenes/productos/pendientes-aro.jpg"
  },
  {
    "nombre": "Pulsera Cadena Fina",
    "categoria": "pulseras",
    "precio": "70€",
    "descripcion": "Oro de 18k, ajustable",
    "imagen": "imagenes/productos/pulsera-cadena.jpg"
  },
  {
    "nombre": "Pulsera Charms Artesanal",
    "categoria": "pulseras",
    "precio": "60€",
    "descripcion": "Plata 925, diseño personalizable",
    "imagen": "imagenes/productos/pulsera-charms.jpg"
  }
];
