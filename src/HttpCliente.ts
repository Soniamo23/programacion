// src/HttpCliente.ts
export interface HttpCliente {
    get<T>(url: string): Promise<T>;
    // Puedes agregar más métodos según necesites (post, put, delete, etc.)
  }
  