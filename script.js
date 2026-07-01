// ===== Joyería — Script compartido =====

document.addEventListener('DOMContentLoaded', () => {
  // Generar tarjetas de producto automáticamente (si existe la lista PRODUCTOS y el contenedor)
  const contenedor = document.querySelector('.vitrina-grid[data-auto]');

  if (contenedor && typeof PRODUCTOS !== 'undefined') {
    contenedor.innerHTML = PRODUCTOS.map(p => `
      <div class="vitrina-pieza" data-categoria="${p.categoria}">
        <div class="vitrina-imagen">
          <img src="${p.imagen}" alt="${p.nombre}" onerror="this.parentElement.textContent='Foto no disponible'">
        </div>
        <span class="vitrina-categoria">${p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1)}</span>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p style="margin-top:0.4rem; font-weight:500; color:var(--marron);">${p.precio}</p>
      </div>
    `).join('');
  }

  // Piezas destacadas en inicio (las 3 primeras de productos.js)
  const destacadas = document.querySelector('.vitrina-grid[data-destacadas]');
  if (destacadas && typeof PRODUCTOS !== 'undefined') {
    destacadas.innerHTML = PRODUCTOS.slice(0, 3).map(p => `
      <div class="vitrina-pieza">
        <div class="vitrina-imagen">
          <img src="${p.imagen}" alt="${p.nombre}" onerror="this.parentElement.textContent='Foto no disponible'">
        </div>
        <span class="vitrina-categoria">${p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1)}</span>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
      </div>
    `).join('');
  }

  // Menú móvil
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('abierto');
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('abierto'));
    });
  }

  // Filtros de catálogo (solo actúa si existen en la página)
  const filtroBtns = document.querySelectorAll('.filtro-btn');
  const piezas = document.querySelectorAll('.vitrina-pieza');

  if (filtroBtns.length && piezas.length) {
    filtroBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filtroBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        const categoria = btn.dataset.filtro;

        piezas.forEach(pieza => {
          if (categoria === 'todos' || pieza.dataset.categoria === categoria) {
            pieza.style.display = '';
          } else {
            pieza.style.display = 'none';
          }
        });
      });
    });
  }

  // Formulario de contacto (demo: solo confirma envío, sin backend real)
  const form = document.querySelector('.contacto-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const boton = form.querySelector('button[type="submit"]');
      const textoOriginal = boton.textContent;
      boton.textContent = 'Mensaje enviado ✓';
      boton.disabled = true;
      form.reset();
      setTimeout(() => {
        boton.textContent = textoOriginal;
        boton.disabled = false;
      }, 3000);
    });
  }
});
