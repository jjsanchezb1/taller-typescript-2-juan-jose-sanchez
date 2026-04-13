import { series } from "./dataSeries.js";
const seriesTable = document.getElementById("series-body");
const promedioTemporadas = document.getElementById("promedio-temporadas");
const detallesSerie = document.getElementById("detalles-serie");
mostrarSeries(series);
promedioTemporadas.innerHTML = `Promedio Temporadas: ${getPromedioTemporadas(series)}`;
function mostrarSeries(seriesList) {
    seriesList.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.style.cursor = "pointer";
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        trElement.addEventListener("click", () => {
            mostrarDetallesSerie(serie);
        });
        seriesTable.appendChild(trElement);
    });
}
function getPromedioTemporadas(seriesList) {
    let totalTemporadas = 0;
    seriesList.forEach((serie) => totalTemporadas += serie.seasons);
    return totalTemporadas / seriesList.length;
}
function mostrarDetallesSerie(serie) {
    detallesSerie.innerHTML = `
        <div class="card";">
            <img class="card-img-top" src="${serie.image}" alt="Imagen de ${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
            </div>
        </div>    
    `;
}
