
import { HttpCliente } from './HttpCliente';

class FetchCliente implements HttpCliente {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al realizar la petición: ${response.statusText}`);
    }
    return await response.json();
  }
}

export { FetchCliente };
