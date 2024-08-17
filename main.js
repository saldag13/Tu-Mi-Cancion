


// Definir la variable globalmente
let currentLocation = 1;
const numOfPapers = 67;
const maxLocation = numOfPapers + 1;
document.cookie = "key=value; SameSite=None; Secure";


// Agregar el event listener después de definir currentLocation
document.addEventListener("DOMContentLoaded", function() {
    const numOfPapers = 66;
    const container = document.getElementById("book");
    const totalLoadTime = 20000; // 20 segundos
    const numOfFrames = (numOfPapers - 1) * 2; // Dos iframes por página, empezando desde p2
    const interval = totalLoadTime / numOfFrames; // Intervalo de tiempo para cargar cada iframe

    // Leer ambos archivos de texto
    Promise.all([
        fetch('notas.txt').then(response => response.text()),
        fetch('Songs.txt').then(response => response.text())
    ])
    .then(([notasData, songsData]) => {
        const notasLines = notasData.split('\n');
        const songsLines = songsData.split('\n');
        let htmlContent = '';

        // Crear el div para p1 (diferente a los demás)
        htmlContent += `
            <div id="p1" class="paper">
                <div class="front">
                    <div id="f1" class="front-content" style=" 
                                                                width: 100%;
                                                                background-image: 
                                                             
                                                                    url('pages/2.jpg');
                                                                background-size: cover;
                                                                background-position: center;
                                                                color: white;
                                                                display: flex;
                                                                align-items: center;
                                                                justify-content: center;
                                                                text-align: center;">
                        
                    </div>
                </div>
                <div class="back">
                    <div id="b1" class="back-content" style=" 
                                                                width: 100%;
                                                                background-image: 
                                                                    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                                                                    url('pages/1 (130).jpg');
                                                                background-size: cover;
                                                                background-position: center;
                                                                color: white;
                                                                display: flex;
                                                                align-items: center;
                                                                justify-content: center;
                                                                text-align: center;">
                        
                    </div>
                </div>
            </div>






            
        `;

        // Generar los divs para p2 en adelante
        for (let i = 1; i < numOfPapers; i++) {
            const p1Index = (i - 1) * 2;
            const p2Index = (i - 1) * 2 + 1;

            // Verificar si las líneas existen
            const p1Text = notasLines[p1Index] ? notasLines[p1Index] : 'Cargando1...';
            const p2Text = notasLines[p2Index] ? notasLines[p2Index] : 'Cargando2...';

            // Obtener las canciones
            const p1Song = songsLines[p1Index] ? songsLines[p1Index] : 'defaultSongId1';
            const p2Song = songsLines[p2Index] ? songsLines[p2Index] : 'defaultSongId2';

            htmlContent += `
                <div id="p${i + 1}" class="paper">
                    <div class="front">
                        <div id="f${i + 1}" class="front-content" style=" 
                                                                                    width: 100%;
                                                                                    background-image: 
                                                                                        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                                                                                        url('pages/1 (${i + 1}).jpg');
                                                                                    background-size: cover;
                                                                                    background-position: center;
                                                                                    color: white;
                                                                                    display: flex;
                                                                                    align-items: center;
                                                                                    justify-content: center;
                                                                                    text-align: center;">
                            <p id="parrafo1">${p1Text}</p>
                            <iframe data-src="https://open.spotify.com/embed/track/${p1Song}?utm_source=generator" class="lazy-frame" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                    <div class="back">
                        <div id="b${i + 1}" class="back-content" style=" 
                                                                                    width: 100%;
                                                                                    background-image: 
                                                                                        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                                                                                        url('pages/1 (${130 - i}).jpg');
                                                                                    background-size: cover;
                                                                                    background-position: center;
                                                                                    color: white;
                                                                                    display: flex;
                                                                                    align-items: center;
                                                                                    justify-content: center;
                                                                                    text-align: center;">
                            <p id="parrafo2">${p2Text}</p>
                            <iframe data-src="https://open.spotify.com/embed/track/${p2Song}?utm_source=generator" class="lazy-frame" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            `;
        }

htmlContent += `
            <div id="p67" class="paper">
                <div class="front">
                    <div id="f67" class="front-content" style=" 
                                                                width: 100%;
                                                                background-image: 
                                                                    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                                                                    url('pages/4.jpg');
                                                                background-size: cover;
                                                                background-position: center;
                                                                color: white;
                                                                display: flex;
                                                                align-items: center;
                                                                justify-content: center;
                                                                text-align: center;">
                                                                <p id="parrafo2">Ya son 6 meses, qué loco, pareciera como si el día de ayer hubieramos bailado nuestra primera canción un baile que nos unió, Y desde ese momento todo a tu lado Me suena a una canción..... Tú mi canción</p>
                        
                    </div>
                </div>
                <div class="back">
                    <div id="b67" class="back-content" style=" 
                                                                width: 100%;
                                                                background-image: 
                                                                    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                                                                    url('pages/5.jpg');
                                                                background-size: cover;
                                                                background-position: center;
                                                                color: white;
                                                                display: flex;
                                                                align-items: center;
                                                                justify-content: center;
                                                                text-align: center;">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1smdALkIvNzTCoIbEBG7dO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        
                    </div>
                </div>
            </div>






            
        `;


        container.innerHTML = htmlContent;

        // Aplicar z-index dinámicamente
        const papers = container.querySelectorAll(".paper");
        papers.forEach((paper, index) => {
            paper.style.zIndex = numOfPapers - index;
        });

        // Función para cargar los iframes
        const loadIframe = (iframe) => {
            const src = iframe.getAttribute('data-src');
            if (src) {
                iframe.setAttribute('src', src);
                iframe.removeAttribute('data-src');
            }
        };

        // Función para iniciar la carga escalonada
        const startLoading = () => {
            const lazyFrames = document.querySelectorAll('iframe.lazy-frame');
            lazyFrames.forEach((frame, index) => {
                setTimeout(() => {
                    loadIframe(frame);
                }, index * interval);
            });
        };

        // Iniciar la carga escalonada después de que la página haya cargado completamente
        startLoading();
    })
    .catch(error => console.error('Error al cargar los archivos:', error));
});

// Referencias a los elementos del DOM
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function goNextPage() {
    if(currentLocation < maxLocation) {
        const currentPaper = document.querySelector(`#p${currentLocation}`);
        if (currentPaper) {
            currentPaper.classList.add("flipped");
            currentPaper.style.zIndex = currentLocation;
            currentLocation++;
        }
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        currentLocation--;
        const currentPaper = document.querySelector(`#p${currentLocation}`);
        if (currentPaper) {
            currentPaper.classList.remove("flipped");

            // Ajustar el z-index para regresar al valor inicial
            currentPaper.style.zIndex = maxLocation - currentLocation;
        }
    }
}









