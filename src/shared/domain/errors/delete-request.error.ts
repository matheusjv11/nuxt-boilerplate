export class DeleteRequestError extends Error {
  constructor() {
    super("Ocorreu um erro ao tentar deletar os dados na API.");
    this.name = "DeleteRequestError";
  }
}
