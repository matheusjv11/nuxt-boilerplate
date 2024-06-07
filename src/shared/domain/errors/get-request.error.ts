export class GetRequestError extends Error {
  constructor() {
    super("Ocorreu um erro ao buscar os dados da API.");
    this.name = "GetRequestError";
  }
}
