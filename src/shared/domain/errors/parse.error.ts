export class ParseError extends Error {
  constructor() {
    super("Ocorreu um erro ao tentar fazer o parse dos dados");
    this.name = "DeleteRequestError";
  }
}
