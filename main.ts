import { series } from "./dataSeries.js";

const seriesTable: HTMLElement = document.getElementById("series-body")!;
const promedioTemporadas: HTMLElement = document.getElementById("promedio-temporadas")!;

mostrarSeries(series);
promedioTemporadas.innerHTML = `Promedio Temporadas: ${getPromedioTemporadas(series)}`;

function mostrarSeries(seriesList: any[]): void {
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

function getPromedioTemporadas(seriesList: any[]): number {
    let totalTemporadas: number = 0;
    seriesList.forEach((serie) => totalTemporadas += serie.seasons);
    return totalTemporadas / seriesList.length;
}

function mostrarDetallesSerie(serie: any): void {
    const detallesSerie = document.getElementById("detalles-serie")!;
    const imagen = document.createElement("imagen") as HTMLImageElement;
    const nombre = document.createElement("nombre");
    const descripcion = document.createElement("descripcion");
    const link = document.createElement("enlace") as HTMLAnchorElement;
    
    imagen.src = serie.imagen;
    nombre.innerHTML = serie.nombre;
    descripcion.innerHTML = serie.descripcion;
    link.href = serie.pagina;
    link.textContent = serie.pagina;
    detallesSerie.style.display = "block";
}

