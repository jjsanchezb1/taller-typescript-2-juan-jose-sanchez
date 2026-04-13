import { series } from "./dataSeries.js";

const seriesTable: HTMLElement = document.getElementById("series-body")!;
const promedioTemporadas: HTMLElement = document.getElementById("promedio-temporadas")!;
const detallesSerie: HTMLElement = document.getElementById("detalles-serie")!;

mostrarSeries(series);
promedioTemporadas.innerHTML = `Promedio Temporadas: ${getPromedioTemporadas(series)}`;

function mostrarSeries(seriesList: any[]): void {
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

function getPromedioTemporadas(seriesList: any[]): number {
    let totalTemporadas: number = 0;
    seriesList.forEach((serie) => totalTemporadas += serie.seasons);
    return totalTemporadas / seriesList.length;
}

function mostrarDetallesSerie(serie: any): void {
    detallesSerie.innerHTML = `
        <div class="card";">
            <img class="card-img-top" src="${serie.image}" alt="Imagen de ${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank" class="btn btn-primary">Ver más</a>
            </div>
        </div>    
    `;
}
