// src/AxiosCliente.ts
import axios, { AxiosResponse } from 'axios';
import { HttpCliente } from './HttpCliente';

class AxiosCliente implements HttpCliente {
  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  }
}

export { AxiosCliente };
