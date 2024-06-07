export class UpdateRequestError extends Error {
  constructor() {
    super("Ocorreu um erro ao tentar atualizar os dados na API.");
    this.name = "UpdateRequestError";
  }
}
