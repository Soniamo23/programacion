// src/main.ts
import { AxiosCliente } from './AxiosCliente';
import { FetchCliente } from './FetchCliente';
import { HttpCliente } from './HttpCliente';

async function obtenerPersonajes(apiCliente: HttpCliente) {
  try {
    const personajes = await apiCliente.get<any>('https://rickandmortyapi.com/');
    console.log('Lista de personajes:', personajes);
  } catch (error) {
    console.error('Error al obtener personajes:', error.message);
  }
}

// Utilizar con Axios
const axiosCliente = new AxiosCliente();
obtenerPersonajes(axiosCliente);

// Utilizar con Fetch
const fetchCliente = new FetchCliente();
obtenerPersonajes(fetchCliente);
