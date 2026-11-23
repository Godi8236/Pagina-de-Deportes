/**
 * PERICO DEPORTES - SCRIPT JS BÁSICO
 * ==========================================================================
 * Funcionalidad interactiva de filtrado por deporte en la sección de
 * "Próximos Partidos".
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos todos los botones de filtro y las tarjetas de partidos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const matchCards = document.querySelectorAll('.match-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones para desmarcarlos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Agregar la clase 'active' únicamente al botón clickeado
            button.classList.add('active');

            // 3. Obtener la categoría del botón seleccionado (todos, futbol, basquet, voley)
            const selectedSport = button.getAttribute('data-sport');

            // 4. Filtrar y mostrar/ocultar las tarjetas según el deporte seleccionado
            matchCards.forEach(card => {
                const cardSport = card.getAttribute('data-sport');

                if (selectedSport === 'todos' || cardSport === selectedSport) {
                    // Mostrar tarjeta
                    card.style.display = 'block';
                    
                    // Efecto de desvanecimiento suave
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    // Ocultar tarjeta
                    card.style.display = 'none';
                }
            });
        });
    });
});
