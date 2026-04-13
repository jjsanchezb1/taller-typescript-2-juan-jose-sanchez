import { series } from "./dataSeries.js";
const seriesTable = document.getElementById("series-body");
const promedioTemporadas = document.getElementById("promedio-temporadas");
mostrarSeries(series);
promedioTemporadas.innerHTML = `Promedio Temporadas: ${getPromedioTemporadas(series)}`;
function mostrarSeries(seriesList) {
    seriesList.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        seriesTable.appendChild(trElement);
    });
}
function getPromedioTemporadas(seriesList) {
    let totalTemporadas = 0;
    seriesList.forEach((serie) => totalTemporadas += serie.seasons);
    return totalTemporadas / seriesList.length;
}
