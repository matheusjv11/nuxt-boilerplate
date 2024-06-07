export class InsertRequestError extends Error {
  constructor() {
    super("Ocorreu um erro ao tentar inserir os dados na API.");
    this.name = "InsertRequestError";
  }
}
