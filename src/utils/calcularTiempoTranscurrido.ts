import moment from 'moment'

export const calcularTiempoTranscurrido = (fecha: string | Date) => {
    // Convierte la fecha proporcionada a un objeto moment
    const fechaCreacion = moment(fecha);

    // Obtiene la fecha actual
    const fechaActual = moment();

    // Calcula la diferencia en duración (intervalo de tiempo)
    const duracion = moment.duration(fechaActual.diff(fechaCreacion));

    let tiempoTranscurrido = ''

    const diasTranscurridos = moment.duration(duracion).days();
    const horasTranscurridas = moment.duration(duracion).hours();
    const minutosTranscurridos = moment.duration(duracion).minutes();
    const segundosTranscurridos = moment.duration(duracion).seconds();

    if (diasTranscurridos > 0) {
        tiempoTranscurrido += `${diasTranscurridos}d `;
    }

    if (duracion.hours() > 0) {
        tiempoTranscurrido += `${horasTranscurridas}h `;
    }

    if (duracion.minutes() > 0) {
        tiempoTranscurrido += `${minutosTranscurridos}m `;
    }

    if (duracion.asSeconds() < 60) {
        tiempoTranscurrido += `${segundosTranscurridos}s`;
      }


    return tiempoTranscurrido; //tiempoTranscurrido;
}