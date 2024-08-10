import { Reproductor } from './classes/Reproductor.js';

document.addEventListener('DOMContentLoaded', () => {
    // Instanciar los reproductores para cada categoría
    const musica = new Reproductor('musica', 'https://www.youtube.com/embed/9bZkp7q19f0');
    const pelicula = new Reproductor('peliculas', 'https://www.youtube.com/embed/5PSNL1qE6VY');
    const serie = new Reproductor('series', 'https://www.youtube.com/embed/MkOK-Ecu-Xo');

    // Cargar los vídeos en cada reproductor
    musica.playMultimedia();
    pelicula.playMultimedia();
    serie.playMultimedia();

    // Establecer tiempo de inicio
    musica.setInicio(30); // Empieza en 30 segundos
});
