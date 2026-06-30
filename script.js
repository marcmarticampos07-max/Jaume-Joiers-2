// ===== Joyería — Script compartido =====

document.addEventListener('DOMContentLoaded', () => {
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
