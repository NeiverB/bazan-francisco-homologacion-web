/**
 * EcoQuim — Examen de Homologación.
 * JavaScript propio (sin backend): catálogo, carrito de compras, logística
 * y confirmación de pedido. Bootstrap solo se usa para los componentes
 * visuales (navbar, carrusel, offcanvas); toda la lógica de datos y eventos
 * de este archivo es propia.
 */
document.addEventListener('DOMContentLoaded', function () {

  // ------------------------------------------------------------------
  // DATOS: catálogo y modalidades de entrega
  // ------------------------------------------------------------------
  const PRODUCTOS = [
    // ---------- Perfumería (con foto real) ----------
    {
      id: 'fem-127',
      nombre: 'Perfume Absolutely Me (Escada)',
      categoria: 'perfumeria',
      precio: 18.50,
      imagen: 'img/products/fem-absolutely-me.webp',
      desc: 'Esencia dulce y afrutada con notas de frambuesa, macaron de rosa y vainilla suave.',
      destacado: true,
    },
    {
      id: 'fem-125',
      nombre: 'Perfume 212 Sexy (Carolina Herrera)',
      categoria: 'perfumeria',
      precio: 16.00,
      imagen: 'img/products/fem-212-sexy.webp',
      desc: 'Fragancia seductora y magnética con notas florales orientales y toques dulces.',
      destacado: true,
    },
    {
      id: 'fem-126',
      nombre: 'Perfume 212 VIP Rose (Carolina Herrera)',
      categoria: 'perfumeria',
      precio: 17.50,
      imagen: 'img/products/fem-212-vip-rose.webp',
      desc: 'Aroma festivo y sofisticado con notas de champán rosado, flor de melocotonero y ámbar.',
      destacado: true,
    },
    {
      id: 'ese-061',
      nombre: 'Esencia Active',
      categoria: 'perfumeria',
      precio: 4.50,
      imagen: 'img/products/esencia-active.webp',
      desc: 'Esencia concentrada para difusores, humidificadores y aromatización de ambientes.',
    },
    {
      id: 'ese-063',
      nombre: 'Esencia Bambú',
      categoria: 'perfumeria',
      precio: 4.50,
      imagen: 'img/products/esencia-bambu.webp',
      desc: 'Esencia concentrada de Bambú, ideal para difusores y aromatización de ambientes.',
    },

    // ---------- Laboratorio e insumos químicos (con foto real) ----------
    {
      id: 'qui-001',
      nombre: 'Ácido ascórbico monohidratado',
      categoria: 'laboratorio',
      precio: 8.00,
      imagen: 'img/products/qui-acido-ascorbico-monohidratado.webp',
      desc: 'Vitamina C pura cristalina. Antioxidante y regulador de pH para uso cosmético e industrial.',
      destacado: true,
    },
    {
      id: 'qui-002',
      nombre: 'Ácido bórico',
      categoria: 'laboratorio',
      precio: 3.50,
      imagen: 'img/products/qui-acido-borico.webp',
      desc: 'Polvo blanco antiséptico, desinfectante y regulador de pH para formulaciones especializadas.',
    },
    {
      id: 'qui-003',
      nombre: 'Agar-agar',
      categoria: 'laboratorio',
      precio: 12.00,
      imagen: 'img/products/qui-agar-agar.webp',
      desc: 'Gelificante vegetal de alta resistencia y pureza para cosmética natural y medios de cultivo.',
    },
    {
      id: 'qui-004',
      nombre: 'Alginato de sodio',
      categoria: 'laboratorio',
      precio: 9.50,
      imagen: 'img/products/qui-alginato-de-sodio.webp',
      desc: 'Polímero natural gelificante extraído de algas marinas para formulaciones cosméticas y geles.',
    },

    // ---------- Limpieza (sin foto en el catálogo original: ícono) ----------
    {
      id: 'hog-221',
      nombre: 'Detergente de ropa líquido',
      categoria: 'limpieza',
      precio: 6.50,
      imagen: null,
      desc: 'Detergente líquido concentrado de alto rendimiento. Remueve manchas difíciles protegiendo colores y fibras.',
    },
    {
      id: 'hog-223',
      nombre: 'Desinfectante de pisos',
      categoria: 'limpieza',
      precio: 5.00,
      imagen: null,
      desc: 'Limpiador desinfectante antibacteriano con fragancias perdurables para todo tipo de piso.',
    },
    {
      id: 'hog-225',
      nombre: 'Limpia vidrios y cristales',
      categoria: 'limpieza',
      precio: 4.00,
      imagen: null,
      desc: 'Fórmula anti-empañamiento que remueve huellas, polvo y grasa sin dejar marcas.',
    },
    {
      id: 'hog-237',
      nombre: 'Cloro líquido y gel',
      categoria: 'limpieza',
      precio: 3.00,
      imagen: null,
      desc: 'Hipoclorito blanqueador y desinfectante clorado de alto poder desmanchante.',
    },

    // ---------- Línea automotriz (sin foto en el catálogo original: ícono) ----------
    {
      id: 'aut-239',
      nombre: 'Ambiental de carro',
      categoria: 'automotriz',
      precio: 3.50,
      imagen: null,
      desc: 'Fragancias concentradas para el habitáculo del vehículo. Neutraliza olores y deja aroma fresco.',
    },
    {
      id: 'aut-241',
      nombre: 'Brillo de llantas (Efecto Mojado)',
      categoria: 'automotriz',
      precio: 6.00,
      imagen: null,
      desc: 'Fórmula de máxima duración que renueva el color negro de los neumáticos.',
    },
    {
      id: 'aut-242',
      nombre: 'Desengrasante de motor',
      categoria: 'automotriz',
      precio: 7.50,
      imagen: null,
      desc: 'Disuelve grasa pesada, aceites quemados y suciedad incrustada en el vano motor.',
    },
    {
      id: 'aut-243',
      nombre: 'Shampoo de auto con cera',
      categoria: 'automotriz',
      precio: 8.00,
      imagen: null,
      desc: 'Fórmula con pH neutro que genera abundante espuma, cuida la pintura y realza el brillo.',
    },

    // ---------- Cuidado de mascotas (sin foto en el catálogo original: ícono) ----------
    {
      id: 'mas-245',
      nombre: 'Shampoo para mascotas (Perros y Gatos)',
      categoria: 'mascotas',
      precio: 7.00,
      imagen: null,
      desc: 'Fórmula suave hipoalergénica con pH neutro, en varios aromas.',
    },
    {
      id: 'mas-246',
      nombre: 'Rinse y acondicionador para mascotas',
      categoria: 'mascotas',
      precio: 6.50,
      imagen: null,
      desc: 'Desenreda nudos con facilidad y deja el pelaje brillante, suave y fácil de cepillar.',
    },
    {
      id: 'mas-247',
      nombre: 'Colonias perfumadas para mascotas',
      categoria: 'mascotas',
      precio: 5.50,
      imagen: null,
      desc: 'Lociones con notas suaves y frescas, diseñadas para el olfato sensible de perros y gatos.',
    },
    {
      id: 'mas-248',
      nombre: 'Ahuyenta perros y repelente de zonas',
      categoria: 'mascotas',
      precio: 4.50,
      imagen: null,
      desc: 'Repelente olfativo seguro y no tóxico para proteger plantas, muebles y entradas.',
    },

    // ---------- Envases (sin foto en el catálogo original: ícono) ----------
    {
      id: 'env-252',
      nombre: 'Potes plásticos',
      categoria: 'envases',
      precio: 2.00,
      imagen: null,
      desc: 'Potes con tapa para cremas, ungüentos y productos en pasta, en distintas capacidades.',
    },
    {
      id: 'env-253',
      nombre: 'Botellas y frascos',
      categoria: 'envases',
      precio: 2.50,
      imagen: null,
      desc: 'Botellas y frascos para envasar líquidos, esencias, perfumes y productos de limpieza.',
    },
    {
      id: 'env-254',
      nombre: 'Goteros',
      categoria: 'envases',
      precio: 1.50,
      imagen: null,
      desc: 'Frascos con gotero para dosificar esencias, aceites y preparaciones concentradas.',
    },
  ];

  const CATEGORIAS = {
    limpieza: { etiqueta: 'Limpieza', color: '#008037' },
    laboratorio: { etiqueta: 'Laboratorio', color: '#004aad' },
    automotriz: { etiqueta: 'Automotriz', color: '#c2410c' },
    perfumeria: { etiqueta: 'Perfumería', color: '#a21caf' },
    mascotas: { etiqueta: 'Mascotas', color: '#7c3aed' },
    envases: { etiqueta: 'Envases', color: '#0f766e' },
  };

  // Un ícono SVG simple por línea, para los productos que no tienen foto
  // (igual de espíritu al sitio original: nada de emoji en la interfaz).
  const ICONOS_CATEGORIA = {
    limpieza: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v4L6 10a4 4 0 0 0 4 6h4a4 4 0 0 0 4-6l-3-4V2"/><path d="M9 2h6"/></svg>',
    laboratorio: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6l-6 10a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3L15 8V2"/><path d="M9 2h6"/></svg>',
    automotriz: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 17V11l2-5h14l2 5v6"/><path d="M5 11h14"/></svg>',
    perfumeria: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v3h-4z"/><path d="M9 5h6l1 4H8z"/><path d="M8 9h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/></svg>',
    mascotas: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="9" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="9" r="2"/><path d="M8.5 15.5C7 13 9 11 12 11s5 2 3.5 4.5S13 20 12 20s-5-2-3.5-4.5Z"/></svg>',
    envases: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  };

  let categoriaActual = 'todos';

  const MODALIDADES = {
    retiro: { etiqueta: 'Retiro en tienda', costo: 0, requiereDireccion: false },
    local: { etiqueta: 'Entrega local en Cuenca', costo: 2.50, requiereDireccion: true },
    nacional: { etiqueta: 'Envío nacional', costo: 5.00, requiereDireccion: true },
  };

  // ------------------------------------------------------------------
  // ESTADO: el carrito es un array de { id, cantidad }
  // ------------------------------------------------------------------
  let carrito = [];

  // Historial de pedidos confirmados, guardado en el navegador (localStorage)
  // para que no se pierda al recargar la página. No requiere servidor.
  const CLAVE_HISTORIAL = 'ecoquim-historial-pedidos';
  let historialPedidos = [];
  try {
    historialPedidos = JSON.parse(localStorage.getItem(CLAVE_HISTORIAL) || '[]');
  } catch (e) {
    historialPedidos = [];
  }

  function buscarProducto(id) {
    return PRODUCTOS.find(p => p.id === id);
  }

  function escapaHtml(texto) {
    const div = document.createElement('div');
    div.textContent = texto ?? '';
    return div.innerHTML;
  }

  function formatoMoneda(valor) {
    return '$' + valor.toFixed(2);
  }

  // ------------------------------------------------------------------
  // RENDER: destacados y catálogo (a partir del array PRODUCTOS)
  // ------------------------------------------------------------------
  function imagenODeProducto(p, claseIcono) {
    if (p.imagen) {
      return `<img src="${escapaHtml(p.imagen)}" alt="${escapaHtml(p.nombre)}" loading="lazy">`;
    }
    const cat = CATEGORIAS[p.categoria];
    const icono = ICONOS_CATEGORIA[p.categoria] || '';
    return `<div class="${claseIcono}" style="color:${cat ? cat.color : '#666'}">${icono}</div>`;
  }

  function tarjetaProducto(p) {
    const cat = CATEGORIAS[p.categoria];
    return `
      <div class="col">
        <div class="card-producto card">
          ${imagenODeProducto(p, 'card-producto-icono')}
          <div class="card-body">
            ${cat ? `<span class="badge-categoria" style="color:${cat.color};border-color:${cat.color}">${escapaHtml(cat.etiqueta)}</span>` : ''}
            <h3 class="h6">${escapaHtml(p.nombre)}</h3>
            <p class="card-text">${escapaHtml(p.desc)}</p>
            <div class="d-flex align-items-center justify-content-between mt-2">
              <span class="precio">${formatoMoneda(p.precio)}</span>
              <button type="button" class="btn btn-eco btn-sm" data-accion="agregar" data-id="${p.id}">
                <i class="fa-solid fa-cart-plus" aria-hidden="true"></i> Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('destacados').innerHTML = PRODUCTOS
    .filter(p => p.destacado)
    .map(tarjetaProducto)
    .join('');

  // ------------------------------------------------------------------
  // FILTRO DE CATÁLOGO POR LÍNEA DE NEGOCIO
  // ------------------------------------------------------------------
  const catalogoGrid = document.getElementById('catalogo-grid');
  const catalogoContador = document.getElementById('catalogo-contador');
  const filtrosCategoria = document.getElementById('filtros-categoria');

  function renderizarCatalogo() {
    const productosFiltrados = categoriaActual === 'todos'
      ? PRODUCTOS
      : PRODUCTOS.filter(p => p.categoria === categoriaActual);

    catalogoGrid.innerHTML = productosFiltrados.map(tarjetaProducto).join('');

    const etiqueta = categoriaActual === 'todos' ? 'todas las líneas' : CATEGORIAS[categoriaActual].etiqueta;
    catalogoContador.textContent = `${productosFiltrados.length} producto${productosFiltrados.length === 1 ? '' : 's'} en ${etiqueta}`;
  }

  filtrosCategoria.addEventListener('click', function (evento) {
    const boton = evento.target.closest('.filtro-btn');
    if (!boton) return;

    categoriaActual = boton.dataset.categoria;

    filtrosCategoria.querySelectorAll('.filtro-btn').forEach(b => {
      b.classList.remove('btn-eco', 'active');
      b.classList.add('btn-outline-eco');
    });
    boton.classList.remove('btn-outline-eco');
    boton.classList.add('btn-eco', 'active');

    renderizarCatalogo();
  });

  renderizarCatalogo();

  // Delegación de eventos: un solo listener para todos los botones "Agregar"
  document.addEventListener('click', function (evento) {
    const boton = evento.target.closest('[data-accion="agregar"]');
    if (!boton) return;
    agregarAlCarrito(boton.dataset.id);
    confirmarAgregado(boton);
  });

  // Feedback visual inmediato en el propio botón: evita que el cliente crea
  // que el clic no hizo nada cuando en realidad sí se agregó al carrito.
  function confirmarAgregado(boton) {
    if (boton.dataset.animando === '1') return;
    boton.dataset.animando = '1';
    const contenidoOriginal = boton.innerHTML;
    boton.disabled = true;
    boton.classList.add('btn-agregado');
    boton.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Agregado';
    setTimeout(() => {
      boton.innerHTML = contenidoOriginal;
      boton.classList.remove('btn-agregado');
      boton.disabled = false;
      delete boton.dataset.animando;
    }, 900);
  }

  // ------------------------------------------------------------------
  // CARRITO: agregar, cambiar cantidad, eliminar
  // ------------------------------------------------------------------
  function agregarAlCarrito(id) {
    const item = carrito.find(i => i.id === id);
    if (item) {
      item.cantidad += 1;
    } else {
      carrito.push({ id, cantidad: 1 });
    }
    renderizarCarrito();
    pulsarContador();
  }

  // Reinicia la animación aunque se agregue varias veces seguido rápido
  function pulsarContador() {
    contadorCarrito.classList.remove('pulso');
    void contadorCarrito.offsetWidth;
    contadorCarrito.classList.add('pulso');
  }

  function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    renderizarCarrito();
  }

  function eliminarDelCarrito(id) {
    carrito = carrito.filter(i => i.id !== id);
    renderizarCarrito();
  }

  function calcularSubtotal() {
    return carrito.reduce((total, item) => {
      const producto = buscarProducto(item.id);
      return total + (producto ? producto.precio * item.cantidad : 0);
    }, 0);
  }

  function calcularEnvio(subtotal) {
    if (subtotal === 0) return 0;
    const modalidad = MODALIDADES[document.getElementById('cf-modalidad').value];
    return modalidad ? modalidad.costo : 0;
  }

  const listaCarrito = document.getElementById('carrito-lista');
  const resumenCarrito = document.getElementById('carrito-resumen');
  const formCheckout = document.getElementById('form-checkout');
  const contadorCarrito = document.getElementById('carrito-contador');

  function renderizarCarrito() {
    const totalItems = carrito.reduce((n, i) => n + i.cantidad, 0);
    contadorCarrito.textContent = totalItems;

    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<p class="carrito-vacio"><i class="fa-solid fa-cart-shopping fa-2x mb-2 d-block"></i>Tu carrito está vacío.</p>';
      resumenCarrito.hidden = true;
      formCheckout.classList.remove('visible');
      return;
    }

    listaCarrito.innerHTML = carrito.map(item => {
      const p = buscarProducto(item.id);
      if (!p) return '';
      const subtotalItem = p.precio * item.cantidad;
      return `
        <div class="carrito-item">
          ${imagenODeProducto(p, 'carrito-item-icono')}
          <div class="carrito-item-info">
            <div class="nombre">${escapaHtml(p.nombre)}</div>
            <div class="text-muted small">${formatoMoneda(p.precio)} c/u</div>
            <div class="carrito-cantidad mt-1">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-accion="restar" data-id="${p.id}" aria-label="Quitar una unidad">-</button>
              <span>${item.cantidad}</span>
              <button type="button" class="btn btn-outline-secondary btn-sm" data-accion="sumar" data-id="${p.id}" aria-label="Agregar una unidad">+</button>
              <button type="button" class="btn btn-link btn-sm text-danger ms-2" data-accion="eliminar" data-id="${p.id}">Eliminar</button>
            </div>
          </div>
          <strong>${formatoMoneda(subtotalItem)}</strong>
        </div>
      `;
    }).join('');

    resumenCarrito.hidden = false;
    formCheckout.classList.add('visible');
    actualizarTotales();
  }

  function actualizarTotales() {
    const subtotal = calcularSubtotal();
    const envio = calcularEnvio(subtotal);
    document.getElementById('txt-subtotal').textContent = formatoMoneda(subtotal);
    document.getElementById('txt-envio').textContent = formatoMoneda(envio);
    document.getElementById('txt-total').textContent = formatoMoneda(subtotal + envio);
  }

  // Delegación de clicks dentro del carrito (+/-, eliminar)
  listaCarrito.addEventListener('click', function (evento) {
    const boton = evento.target.closest('button[data-accion]');
    if (!boton) return;
    const { accion, id } = boton.dataset;
    if (accion === 'sumar') cambiarCantidad(id, 1);
    if (accion === 'restar') cambiarCantidad(id, -1);
    if (accion === 'eliminar') eliminarDelCarrito(id);
  });

  // ------------------------------------------------------------------
  // LOGÍSTICA: modalidad de entrega
  // ------------------------------------------------------------------
  const selectModalidad = document.getElementById('cf-modalidad');
  const campoDireccion = document.getElementById('campo-direccion');
  const inputDireccion = document.getElementById('cf-direccion');

  function manejarCambioModalidad() {
    const modalidad = MODALIDADES[selectModalidad.value];
    campoDireccion.classList.toggle('oculto', !modalidad.requiereDireccion);
    inputDireccion.required = modalidad.requiereDireccion;
    actualizarTotales();
  }

  selectModalidad.addEventListener('change', manejarCambioModalidad);
  manejarCambioModalidad();

  // ------------------------------------------------------------------
  // CHECKOUT: validación y confirmación
  // ------------------------------------------------------------------
  const formError = document.getElementById('form-error');

  function validarFormulario() {
    let valido = true;
    formCheckout.querySelectorAll('[required]').forEach(campo => {
      const vacio = !campo.value.trim();
      campo.classList.toggle('campo-invalido', vacio);
      if (vacio) valido = false;
    });
    return valido;
  }

  formCheckout.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (!validarFormulario()) {
      formError.textContent = 'Completa los campos obligatorios antes de confirmar.';
      formError.hidden = false;
      return;
    }
    formError.hidden = true;

    guardarEnHistorial();
    mostrarConfirmacion();
  });

  // Guarda una copia del pedido confirmado en el historial (localStorage)
  function guardarEnHistorial() {
    const subtotal = calcularSubtotal();
    const envio = calcularEnvio(subtotal);
    const modalidad = MODALIDADES[selectModalidad.value];

    historialPedidos.unshift({
      fecha: new Date().toISOString(),
      nombre: document.getElementById('cf-nombre').value.trim(),
      modalidad: modalidad.etiqueta,
      items: carrito.map(item => {
        const p = buscarProducto(item.id);
        return p ? { nombre: p.nombre, precio: p.precio, cantidad: item.cantidad } : null;
      }).filter(Boolean),
      subtotal,
      envio,
      total: subtotal + envio,
    });

    try {
      localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historialPedidos));
    } catch (e) {
      // localStorage puede fallar (modo privado, cuota llena); el pedido
      // ya se guardó en memoria y se ve en el historial durante la sesión.
    }

    actualizarContadorHistorial();
  }

  function actualizarContadorHistorial() {
    document.getElementById('historial-contador').textContent = historialPedidos.length;
  }

  function renderizarHistorial() {
    const cont = document.getElementById('historial-lista');

    if (historialPedidos.length === 0) {
      cont.innerHTML = '<p class="text-muted text-center mb-0">Todavía no has hecho ningún pedido.</p>';
      return;
    }

    cont.innerHTML = historialPedidos.map((pedido, indice) => {
      const fecha = new Date(pedido.fecha).toLocaleString('es-EC', { dateStyle: 'medium', timeStyle: 'short' });
      const itemsHtml = pedido.items.map(item =>
        `<li>${item.cantidad} × ${escapaHtml(item.nombre)} — ${formatoMoneda(item.precio * item.cantidad)}</li>`
      ).join('');
      const separador = indice < historialPedidos.length - 1 ? 'border-bottom pb-3 mb-3' : '';

      return `
        <div class="${separador}">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <strong>${escapaHtml(pedido.nombre)}</strong>
            <span class="text-muted small text-nowrap ms-2">${fecha}</span>
          </div>
          <ul class="list-unstyled small mb-2">${itemsHtml}</ul>
          <div class="d-flex justify-content-between small">
            <span class="text-muted">Envío: ${escapaHtml(pedido.modalidad)} (${formatoMoneda(pedido.envio)})</span>
            <strong>${formatoMoneda(pedido.total)}</strong>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('modalHistorial').addEventListener('show.bs.modal', renderizarHistorial);
  actualizarContadorHistorial();

  function mostrarConfirmacion() {
    const subtotal = calcularSubtotal();
    const modalidadKey = selectModalidad.value;
    const modalidad = MODALIDADES[modalidadKey];
    const envio = calcularEnvio(subtotal);

    document.getElementById('conf-nombre').textContent = document.getElementById('cf-nombre').value.trim();
    document.getElementById('conf-items').innerHTML = carrito.map(item => {
      const p = buscarProducto(item.id);
      return p ? `<li>${item.cantidad} × ${escapaHtml(p.nombre)} — ${formatoMoneda(p.precio * item.cantidad)}</li>` : '';
    }).join('');
    document.getElementById('conf-subtotal').textContent = formatoMoneda(subtotal);
    document.getElementById('conf-modalidad').textContent = modalidad.etiqueta;
    document.getElementById('conf-envio').textContent = formatoMoneda(envio);
    document.getElementById('conf-total').textContent = formatoMoneda(subtotal + envio);

    listaCarrito.parentElement.querySelectorAll('#carrito-lista, #carrito-resumen').forEach(el => el.hidden = true);
    formCheckout.hidden = true;
    document.getElementById('confirmacion').hidden = false;
  }

  document.getElementById('btn-nuevo-pedido').addEventListener('click', function () {
    // El carrito se mantiene con los mismos productos para poder repetir
    // el pedido fácilmente; solo se limpian los datos del formulario.
    formCheckout.reset();
    formCheckout.hidden = false;
    formError.hidden = true;
    document.getElementById('confirmacion').hidden = true;
    listaCarrito.hidden = false;
    document.getElementById('carrito-resumen').hidden = false;
    manejarCambioModalidad();
    renderizarCarrito();
  });

  // ------------------------------------------------------------------
  renderizarCarrito();
});
